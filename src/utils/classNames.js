/**
 * 여러 클래스명을 조건부로 결합하는 유틸리티 함수
 * 
 * @param {...(string|Object)} props - 문자열 또는 객체 형태의 클래스명들
 * @returns {string} 공백으로 구분된 클래스명 문자열
 * 
 * @example
 * // 기본 사용법 (문자열)
 * classNames('foo', 'bar') // => 'foo bar'
 * 
 * // 조건부 클래스 (객체)
 * classNames({
 *   'text-red': isError,
 *   'bg-blue': isActive
 * }) // => 'text-red bg-blue' (if both conditions are true)
 * 
 * // 혼합 사용
 * classNames('btn', {
 *   'btn-primary': isPrimary,
 *   'btn-large': isLarge
 * }, 'rounded') // => 'btn btn-primary rounded' (if isPrimary is true, isLarge is false)
 */
export default function classNames(...props) {
  const classNames = props.reduce((acc, cur) => {
    if (typeof cur === "string") {
      return [...acc, cur];
    }
    if (typeof cur === "object") {
      const values = Object.values(cur).map((value) => {
        if (!value) return "";
        return value;
      });
      return [...acc, ...values];
    }
    return acc;
  }, []);
  return classNames.join(" ");
}
 