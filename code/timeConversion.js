function timeConversion(s) {
  /*
   * Write your code here.
   */
  console.log(s);
  let newTime = null;
  newTime = s.substring(2);
  let temp = s.substring(0, 2);
  console.log(s.substring(s.length - 2, s.length));


  if (temp == '12' && (s.substring(s.length - 2, s.length) == 'AM')) {
      temp = '00';
      newTime = temp + newTime.replace('PM', '').replace('AM', '');
      console.log(newTime + " " + temp);

      console.log("Modified Time " + newTime);
      return newTime;
  } else if (temp == '12' && (s.substring(s.length - 2, s.length) == 'PM')) {

      // return s.replace('AM', '');
      temp = '12';
      newTime = temp + newTime.replace('PM', '').replace('AM', '');
      console.log(newTime);
      console.log("hhghhg");
      return newTime;


      
  } else if(s.substring(s.length - 2, s.length) == 'PM'){
      temp = parseInt(temp) + 12;
      newTime = temp + newTime.replace('PM', '').replace('AM', '');
      console.log(newTime + " " + temp);

      console.log("Modified Time " + newTime);
      return newTime;
      
  }else{

    newTime = temp + newTime.replace('PM', '').replace('AM', '');
    console.log(newTime + " " + temp);

    console.log("Modified Time " + newTime);
    return newTime;

  }
  

  // console.log(s.substring(s.length-2, s.length));

}



timeConversion("06:40:03AM");