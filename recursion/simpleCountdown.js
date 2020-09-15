function countdown(nr) {
  if (nr <= 0 ) {
    console.log("All done")
    return
  }
  console.log(nr)
  nr--
  countdown(nr)
}

countdown(5)