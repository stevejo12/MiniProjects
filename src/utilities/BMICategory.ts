const BMICategory = (num: number): string => {
  var category = "";

  if (num < 16) {
    category = "Severe Thinness";
  } else if (num > 16 && num <= 17) {
    category = "Moderate Thinness";
  } else if (num > 17 && num <= 18.5) {
    category = "Mild Thinness";
  } else if (num > 18.5 && num <= 25) {
    category = "Normal";
  } else if (num > 25 && num <= 30) {
    category = "Overweight";
  } else if (num > 30 && num <= 35) {
    category = "Obese Class I";
  } else if (num > 35 && num <= 40) {
    category = "Obese Class II";
  } else if (num > 40) {
    category = "Obese Class III";
  }

  return category;
};

export default BMICategory;
