export default function ProjectFooter () {
    return (
        <footer style={{fontFamily: 'Space Grotesk', fontSize: 20}} className="fixed bottom-0 left-0 w-full z-10 text-center py-4 text-l text-gray-500 flex flex-row justify-between items-center gap-3 relative">
			<div className="text-white font-semibold ml-[23px]">광운대 멋쟁이사자처럼</div>
			<div className="text-gray-400">© 2025 LIKELION KWUNIV</div>
			<div className="flex items-center gap-3 mr-[23px]">
				<span>Contact us!</span>
				<img src="/images/Email.png" onClick={() => window.open('kwu@likelion.org')} alt="mail" className="w-4 h-4" />
				<img src="/images/insta.png" onClick={() => window.open('https://www.instagram.com/likelion_kwangwoon/')} alt="insta" className="w-4 h-4" />
				<img src="/images/git.png" onClick={() => window.open('https://github.com/LikeLion-Kwangwoon-Univ-13')} alt="github" className="w-4 h-4" />
			</div>
		</footer> 
    );
}