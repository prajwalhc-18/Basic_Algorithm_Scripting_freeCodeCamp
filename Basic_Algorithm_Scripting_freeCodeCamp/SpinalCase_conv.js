function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    return str.replace(/[\s_]/g, '-').toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  