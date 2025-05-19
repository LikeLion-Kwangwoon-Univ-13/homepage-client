import HomeComponentProvider from "@/components/(home)/home";
import useInitStore from "@/store/initStore";

export default function Page() {
  const { init } = useInitStore()
  return (
    <div className="relative h-screen">
      <HomeComponentProvider.A />
      <SubComponents init={init} />
    </div>
  )
}
function SubComponents({ init }) {
  if (init) return <>
    <HomeComponentProvider.B />
    <HomeComponentProvider.C />
    <HomeComponentProvider.D />
  </>
}