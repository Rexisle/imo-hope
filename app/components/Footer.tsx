 {/* FOOTER */}
 export default function Footer() {
    return (
 <footer className="bg-black text-gray-300 py-20 px-6">
 <div className="max-w-6xl mx-auto text-center">

   {/* Brand */}
   <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">
     IMO HOPE FOR THE HOPELESS
   </h4>

   

   {/* Social Links */}
   <div className="flex justify-center gap-10 text-sm font-medium mb-12">
     <a
       href="#"
       className="hover:text-white transition duration-300 hover:scale-105"
     >
       Instagram
     </a>
     <a
       href="#"
       className="hover:text-white transition duration-300 hover:scale-105"
     >
       Facebook
     </a>
     <a
       href="https://wa.me/2348036510709"
       className="hover:text-white transition duration-300 hover:scale-105"
       target="_blank"
       rel="noopener noreferrer"
     >
       Whatsapp
     </a>
   </div>
   {/* Contact Info */}
   <div className="text-sm text-gray-400">
     <p className="mb-2">
     <strong>Phone:</strong> +234 803 651 0709
     </p>
     <p>
     <strong></strong> No.6 Njor Abel close, Chinda street, Mgbuoba, Port Harcourt, Nigeria.
     </p>
   </div>
   {/* Divider */}
   <div className="border-t border-gray-800 pt-8">
     <p className="text-xs text-gray-500">
       © {new Date().getFullYear()} Imo Hope for the Hopeless. All rights reserved.
     </p>
   </div>

 </div>
</footer>
    );
 }