import { FaGithub, FaInstagram } from "react-icons/fa";

export default function TeamCard({
  name,
  role,
  stack = [],
  github,
  instagram,
  profile
}) {
  return (
    <div className="w-[263px] h-[390px] rounded-[15px] border border-white flex flex-col items-center justify-between py-6 px-4 text-white">
      
      {/* 프로필 이미지 */}
      <div className="w-[161px] h-[161px] rounded-full border border-white overflow-hidden flex items-center justify-center mt-4">
        <img
          className="w-full h-full object-cover object-center"
          src={profile || "/images/profile.png"}
          alt={`${name} 프로필`}
        />
      </div>

      {/* 이름/직책 */}
      <div className="text-center mt-2 leading-tight">
        <p className="text-[24px] font-bold">{name}</p>
        <p className="text-[16px] font-bold mt-[6px]">{role}</p>
      </div>

      {/* 기술 스택 */}
      <div className="flex gap-[6px] mt-1">
        {stack.map((item, idx) => (
          <span
            key={idx}
            className="bg-white text-black font-bold text-[8px] rounded-full px-2 w-[60px] h-[22px] flex items-center justify-center"
          >
            {item}
          </span>
        ))}
      </div>

      {/* SNS 아이콘 */}
      <div className="flex gap-6 mt-1.5">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-[20px]" />
          </a>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-[20px]" />
          </a>
        )}
      </div>
    </div>
  );
}
