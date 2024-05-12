// 생년월일로 받는 날짜의 유효성을 검증합니다.
export const validateDate = {
  year: function (year: string) {
    return +year > 1900 && +year < new Date().getFullYear();
  },
  month: function (month: string) {
    return +month > 0 && +month < 13;
  },
  day: function (year: string, month: string, day: string) {
    return +day > 0 && +day < new Date(+year, +month, 0).getDate();
  },
};

export function calculateAge(birth: string) {
  const birthDate = new Date(birth);
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();

  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  console.log(birthDate, today);

  if (
    birthMonth < todayMonth ||
    (birthMonth === todayMonth && birthDay < todayDay)
  )
    return age;
  return age - 1;
}
