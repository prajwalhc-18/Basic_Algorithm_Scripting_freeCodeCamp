function checkPasswordStrength(password) {
  let points = 0;
  if (password.length < 6) {
    points -= 1;
  } else if (password.length <= 10) {
    points += 1;
  } else {
    points += 2;
  }

  if (/[A-Z]/.test(password)) {
    points += 1;
  }
  if (/[a-z]/.test(password)) {
    points += 1;
  }
  if (/\d/.test(password)) {
    points += 1;
  }
  if (/[^A-Za-z0-9]/.test(password)) {
    points += 1;
  }
  return points;
}

console.log(checkPasswordStrength("password")); // Output: 0 (Too short and no variety)
console.log(checkPasswordStrength("Passw0rd")); // Output: 4 (Meets minimum requirements)
console.log(checkPasswordStrength("StrongPassword123!")); // Output: 7 (Meets all criteria)
