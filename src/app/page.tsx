import Image from "next/image";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header Bar */}
      <div className="bg-gray-50 border-b text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="text-gray-600">Sunday, July 6, 2025</div>
          <div className="flex space-x-4 text-gray-600">
            <a href="#" className="hover:text-gray-900">Sign in / Join</a>
            <a href="#" className="hover:text-gray-900">Write For Us</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Disclaimers</a>
            <a href="#" className="hover:text-gray-900">Contact Us</a>
            <a href="#" className="hover:text-gray-900">About Us</a>
            <a href="#" className="hover:text-gray-900">Register and Post</a>
          </div>
        </div>
      </div>

      {/* Main Header with Logo */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <img
              src="https://ext.same-assets.com/3719846683/2881124301.png"
              alt="Fashion Bombay"
              className="h-20 w-auto"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-b border-gray-200 mb-8">
          <div className="flex justify-center">
            <div className="flex space-x-8">
              <a href="#" className="px-4 py-3 text-gray-900 border-b-2 border-teal-500 font-medium">HOME</a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-900">FEATURED</a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-900">FASHION</a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-900">HEALTH</a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-900">LIFESTYLE</a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-900">LUXURY</a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-900">MAKEUP</a>
              <a href="#" className="px-4 py-3 text-gray-600 hover:text-gray-900">MISCELLANEOUS</a>
            </div>
            <div className="flex items-center ml-8">
              <Search className="h-5 w-5 text-gray-600" />
            </div>
          </div>
        </nav>

        {/* Featured Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Article 1 */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3719846683/3123560150.jpeg"
                alt="Top Trendy Kurti Sets for Women"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">FASHION</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-2">TOP TRENDY KURTI SETS FOR WOMEN</h3>
                <div className="text-sm opacity-90">
                  <span>Lang Chun</span> - <span>March 15, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3719846683/3500991092.jpeg"
                alt="5 Ways Ageing can Change our Hair"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm font-medium">HAIR CARE</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-2">5 WAYS AGEING CAN CHANGE OUR HAIR</h3>
                <div className="text-sm opacity-90">
                  <span>Lang Chun</span> - <span>February 8, 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="relative group cursor-pointer">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
              <img
                src="https://ext.same-assets.com/3719846683/4197578912.jpeg"
                alt="Will My Breasts Sag if I Don't Wear a Bra During Breastfeeding?"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-pink-600 text-white px-3 py-1 rounded text-sm font-medium">FASHION</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold mb-2">WILL MY BREASTS SAG IF I DON'T WEAR A BRA DURING BREASTFEEDING?</h3>
                <div className="text-sm opacity-90">
                  <span>Lang Chun</span> - <span>January 22, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Fashion Section */}
          <div className="lg:col-span-2">
            {/* Fashion Section */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">FASHION</h2>
                <select className="text-gray-600 bg-transparent border-none">
                  <option>All</option>
                </select>
              </div>

              {/* Large Featured Article */}
              <div className="mb-8">
                <div className="relative group cursor-pointer">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                    <img
                      src="https://ext.same-assets.com/3719846683/4226377316.jpeg"
                      alt="When Should You Wear Blue Light Glasses?"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-3xl font-bold mb-3">When Should You Wear Blue Light Glasses?</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-blue-600 px-2 py-1 rounded">Fashion</span>
                        <span>Lang Chun</span>
                        <span>April 12, 2025</span>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://ext.same-assets.com/3719846683/4197578912.jpeg"
                      alt="Will My Breasts Sag if I Don't Wear a Bra During Breastfeeding?"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    Will My Breasts Sag if I Don't Wear a Bra During Breastfeeding?
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Fashion</span>
                    <span>Lang Chun</span>
                    <span>March 8, 2025</span>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-xs">0</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    If you're breastfeeding (or planning to), you might be wondering what it means for your breasts and whether skipping a bra could lead to sagging. It's totally normal to...
                  </p>
                </article>

                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://ext.same-assets.com/3719846683/3871687095.jpeg"
                      alt="10 Must-Have Sunscreens For Monsoon"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    10 Must-Have Sunscreens For Monsoon
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">Fashion</span>
                    <span>Lang Chun</span>
                    <span>February 24, 2025</span>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded text-xs">0</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Monsoon is a relief from the hot summer season, but don't let the cloudy skies fool you. The UV rays can go through the clouds and remain a threat....
                  </p>
                </article>
              </div>
            </div>

            {/* Hair Care Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">HAIR CARE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://ext.same-assets.com/3719846683/2791585392.jpeg"
                      alt="How to Color Your Dark Hair in Your Home"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm">HAIR CARE</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    How to Color Your Dark Hair in Your Home (Without Any Bleach)
                  </h3>
                  <div className="text-sm text-gray-600">
                    <span>Lang Chun</span> - <span>January 15, 2025</span>
                  </div>
                </article>

                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://ext.same-assets.com/3719846683/3500991092.jpeg"
                      alt="5 Ways Ageing can Change our Hair"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm">HAIR CARE</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    5 Ways Ageing can Change our Hair
                  </h3>
                  <div className="text-sm text-gray-600">
                    <span>Lang Chun</span> - <span>December 12, 2024</span>
                  </div>
                </article>
              </div>
            </div>

            {/* Lifestyle Section */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">LIFESTYLE</h2>
                <select className="text-gray-600 bg-transparent border-none">
                  <option>All</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://ext.same-assets.com/3719846683/4226377316.jpeg"
                      alt="When Should You Wear Blue Light Glasses?"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm">Fashion</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    When Should You Wear Blue Light Glasses?
                  </h3>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>Lang Chun</span> - <span>April 3, 2025</span>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded ml-2">0</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Quick Answer Blue light glasses help reduce eye strain and improve sleep by blocking blue light from screens and artificial lights. Here's when you should...
                  </p>
                </article>

                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://ext.same-assets.com/3719846683/2840399589.jpeg"
                      alt="Seasonal Kurta Styles"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm">Fashion</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    Seasonal Kurta Styles: What to Wear in Monsoon
                  </h3>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>Lang Chun</span> - <span>January 28, 2025</span>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded ml-2">0</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We all love to flaunt our styles and fashion throughout the year round, but every season deserves a particular style. However, the one outfit...
                  </p>
                </article>

                <article className="group cursor-pointer">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="https://ext.same-assets.com/3719846683/4270150076.jpeg"
                      alt="5 Essential Saree Colors"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">Culture</span>
                    </div>
                  </div>
                  <h3 className="font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    5 Essential Saree Colors to Brighten Up Your Wardrobe
                  </h3>
                  <div className="text-sm text-gray-600 mb-2">
                    <span>Lang Chun</span> - <span>February 14, 2025</span>
                    <span className="bg-teal-600 text-white px-2 py-1 rounded ml-2">0</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    In the kaleidoscopic fashion, sarees stand out as emblematic of timeless grace and cultural heritage. This traditional Indian attire has traversed centuries, evolving in...
                  </p>
                </article>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mb-12">
              <button className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center">1</button>
              <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300">2</button>
              <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300">3</button>
              <span className="flex items-center px-2">...</span>
              <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300">20</button>
              <button className="text-gray-600 hover:text-gray-900">&gt;</button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Posts */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">RECENT POSTS</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://ext.same-assets.com/3719846683/755100804.jpeg"
                    alt="Recent post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-sm mb-1 hover:text-teal-600 cursor-pointer">
                      How to Honor & Nourish Your Curls The Curly Girl Way
                    </h4>
                    <div className="text-xs text-gray-600">
                      <span>Lang Chun</span> - <span>March 20, 2025</span>
                      <span className="bg-teal-600 text-white px-1 py-0.5 rounded ml-1">0</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <img
                    src="https://ext.same-assets.com/3719846683/2970127651.jpeg"
                    alt="Recent post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-sm mb-1 hover:text-teal-600 cursor-pointer">
                      What Is Actually Lesser Neck and Back Pain?
                    </h4>
                    <div className="text-xs text-gray-600">
                      <span>Lang Chun</span> - <span>January 30, 2025</span>
                      <span className="bg-teal-600 text-white px-1 py-0.5 rounded ml-1">0</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <img
                    src="https://ext.same-assets.com/3719846683/1050035486.jpeg"
                    alt="Recent post"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-sm mb-1 hover:text-teal-600 cursor-pointer">
                      4 Reasons to Hire Professionals for Embroidery
                    </h4>
                    <div className="text-xs text-gray-600">
                      <span>Lang Chun</span> - <span>February 5, 2025</span>
                      <span className="bg-teal-600 text-white px-1 py-0.5 rounded ml-1">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div>
              <img
                src="https://ext.same-assets.com/3719846683/1343769823.png"
                alt="Fashion Bombay"
                className="h-16 mb-4"
              />
              <p className="text-gray-300 mb-4">
                Fashion Bombay is your daily dose of Latest Fashion Trends, Celebrity Styles, Luxury, Hair Care, Featured, Party, Social, Culture & Fashion updates.
              </p>
              <p className="text-gray-400 text-sm">
                Contact us: <a href="mailto:info@fashion-bombay.com" className="text-teal-400">info@fashion-bombay.com</a>
              </p>
            </div>

            {/* Popular Posts */}
            <div>
              <h3 className="text-lg font-bold mb-4">POPULAR POSTS</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://ext.same-assets.com/3719846683/755100804.jpeg"
                    alt="Popular post"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-sm font-medium mb-1">Follow This Hair Care Routine To Get Rid of Your Scalp...</h4>
                    <p className="text-xs text-gray-400">April 5, 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img
                    src="https://ext.same-assets.com/3719846683/3845723432.png"
                    alt="Popular post"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-sm font-medium mb-1">5 Popular Hair Serum Selling Brands in India</h4>
                    <p className="text-xs text-gray-400">March 25, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Categories */}
            <div>
              <h3 className="text-lg font-bold mb-4">POPULAR CATEGORY</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Fashion</span>
                  <span>41</span>
                </div>
                <div className="flex justify-between">
                  <span>Health</span>
                  <span>21</span>
                </div>
                <div className="flex justify-between">
                  <span>Lifestyle</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between">
                  <span>Miscellaneous</span>
                  <span>10</span>
                </div>
                <div className="flex justify-between">
                  <span>Beauty</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Care</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span>Social</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span>Parties</span>
                  <span>6</span>
                </div>
                <div className="flex justify-between">
                  <span>Luxury</span>
                  <span>6</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">Write For Us</a>
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Disclaimers</a>
              <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              <a href="#" className="text-gray-400 hover:text-white">Register and Post</a>
            </div>
            <p className="text-gray-400 text-sm">© Fashion Bombay 2020</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
