const Footer = () => {
    return(
        <>
        <footer className="bg-gray-900 text-white py-6 mt-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <p className="text-sm text-gray-400">
      &copy; {new Date().getFullYear()} The Malishu's Clothify.  All rights reserved.
    </p>
    <p className="text-sm text-gray-400">
      Built with ❤️ by <span className="text-white font-semibold">Engineer Collins</span>
    </p>

    
  </div>
</footer>

        </>
    )
}

export default Footer