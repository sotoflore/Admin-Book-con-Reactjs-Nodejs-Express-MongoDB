import LogoWebSite from "../../logoApp/LogoWebSite";

const SidebarHeader = () => {
    return (
        <div className='flex justify-center items-center flex-col mb-6'>
            <LogoWebSite className="w-24"/>
            <h1 className='text-3xl font-extrabold text-white'>Colibro Tech</h1>
        </div>
    )
}
export default SidebarHeader;