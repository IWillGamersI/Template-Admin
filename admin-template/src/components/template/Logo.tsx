export default function Logo(){
    return(
        <div className={`
            flex flex-col items-center justify-center
            h-16 w-16 bg-white rounded-full
        `}>

            <div className={`h-3 w-3 rounded-full bg-red-600 mb-1`}></div>

            <div className={`flex mt-1`}>
            <div className={`h-3 w-3 rounded-full bg-blue-600 mr-1`}></div>
            <div className={`h-3 w-3 rounded-full bg-green-600 ml-1`}></div>

            </div>


        </div>
    )
}