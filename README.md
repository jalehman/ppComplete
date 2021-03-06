# kpComplete
> a library for optimizing your ML algorithms

NOTE: This is still under active development. It is not yet user-friendly. If you want to add in a feature or two, or add a few commits to make it more user-friendly, I'd love to accelerate it's progression. Otherwise, the core functionality is there and getting better by the day, as long as you're ok doing a little bit of work figuring out how to access it.

## How to use:
1. `git clone https://github.com/ClimbsRocks/ppComplete.git` (I'll launch on npm once it's ready for a public debut)
2. npm install
3. `node kpLib.js <PATH TO DATA FILE>.csv`

#### NOTE: This library is designed to run across all but one cores on the host machine. What this means for you:

1. Please plug in
2. Close all programs and restart right before invoking (this will clear out as much RAM as possible)
3. Expect some noise from your fan- you're finally putting your computer to use!
4. Don't expect to be able to do anything intense while this is running. Internet browsing or code editing is fine, but watching a movie may get challenging

## Format of Data File:
1. .csv file
2. First row holds the column names
3. The first column holds the output data (what you want the net to make a prediction about)
4. Make sure there are no empty rows!
5. Make sure each row has the same number of columns (even if those columns are blank, they must exist)

## The Current State Of Advanced Options: 
1. maxTrainingTime: the maximum amount of time (in seconds) to let any child process train one individual neural net. 
1 Default: 600 (5 minutes)
2. maxTrainingIterations: the maximum number of iterations to let any child process train one individual neural net.
2 Default: 100
3. useStreams: whether to feed data into the net via a stream, or load up all the data at once and feed it in as one big block. Streams have a HUGE advantage in terms of the memory they take up, so if RAM is your limiting factor, use streams. However, at the moment (until I can refactor to use child_processes' stdio), streams have a significant disadvantage in training time. So if your dataset is small, don't use streams. If your dataset is large enough to possibly run out of memory, pass in true for useStream. 
3 Default: false
3 NOTE: this is not fully implemented yet. The code is all there, I just haven't made sure it's all still working properly. This would be an easy PR to contribute :)
