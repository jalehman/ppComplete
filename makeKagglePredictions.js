

module.exports = function(pathToKaggleData) {
  // Read in the data
  // format the data in the exact same way the training data is
    // this seems easy right now, but will become considerably more difficult once we have DilMil type data where we have categorical/binary data in a column, and then we need to cull it down to only the categories with enough coverage to be useful
    // we will likely need access to the dataSummary object to know what the min and max were, as well as what categories were included. 
  // boot up a net from the best one that we've trained
  // run the formatted kaggle data through that net
  // write the output results to the file.
    // challenges:
      // 1. figuring out which column the output is in
      // 2. making sure we put the output in the right row
      // making sure we put the output in the right column
      // formattign the data given an uncertain column for the output. 
      // do we force the user to make the output column the first one, and then the id column the next one, or something consistent like that?
      // do we have them pass in a flag telling us what column number it is?
        // if so, let's make that flag 1-indexed to make it more similar to databases and MS Excel
      // i have a feeling we'll hae to recreate the table from scratch, writing to our own version of the file, and inserting each row one at a time. net.run is synchronous i believe, so keeping things in order should be pretty easy. 
      // format each row. i think we just need a string that has each column separated by a comma, and ending with a newline character. 
      // test this by opening it up in textEdit and Excel to visually verify, then test it by uploading to kaggle and making sure they have no issues with the format.
}