/**
 * CHEY ACCESSORIES / BMC ACCESSORIES - PRODUCTION E-COMMERCE CORE
 * Vanilla JavaScript | State Management, View Routing, Cart & Checkout, Filters, Vector Icons & Animations
 */

(function () {
  'use strict';

  // ==========================================
  // 1. PRODUCT DATABASE (REALISTIC TECH GEAR)
  // ==========================================
  const PRODUCTS = [
    {
      id: 'prod-1',
      name: 'Apex Pro 75 Wireless Mechanical Keyboard',
      category: 'Keyboards',
      brand: 'CheyTech',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.9,
      reviewsCount: 168,
      badge: 'Best Seller',
      badgeClass: 'badge-best',
      inStock: true,
      stockCount: 14,
      chips: ['Wireless 2.4G', 'Hot-Swap', 'RGB Backlit'],
      brief: 'Tri-Mode Wireless • Gateron Yellow Linear • Sound Foam',
      highlights: [
        'Tri-Mode connectivity: 2.4GHz lag-free wireless, BT 5.2, or Type-C wired',
        'Universal 5-pin hot-swappable PCB compatible with any MX style switch',
        'Gasket mount structure with multi-layer Poron acoustic dampening foam',
        'High-capacity 4000mAh battery providing up to 240 hours without RGB'
      ],
      description: 'The Apex Pro 75 offers an exquisite typing feel with factory-lubed Gateron Yellow linear switches, sound-dampening poron foam, gasket mounting, and south-facing RGB lighting. Seamlessly toggle between 2.4GHz wireless, Bluetooth 5.2, or wired USB-C.',
      images: [
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Layout': '75% Compact (82 Keys)',
        'Switches': 'Hot-Swappable Gateron Linear Yellow',
        'Connectivity': '2.4GHz Wireless / BT 5.2 / USB-C',
        'Battery Life': 'Up to 240 Hours (RGB Off)',
        'Keycaps': 'Double-Shot PBT Cherry Profile',
        'RGB': '16.8M Per-Key South-Facing RGB',
        'Compatibility': 'Windows, macOS, Linux, iOS, Android'
      }
    },
    {
      id: 'prod-2',
      name: 'Phantom Glide 4K Wireless Gaming Mouse',
      category: 'Mice',
      brand: 'CheyTech',
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviewsCount: 124,
      badge: 'Trending',
      badgeClass: 'badge-hot',
      inStock: true,
      stockCount: 22,
      chips: ['52g Ultralight', '26K DPI', '4000Hz Ready'],
      brief: 'PAW3395 26K Sensor • 52g Featherweight • 4K Hz Polling',
      highlights: [
        'Flawless PixArt PAW3395 optical sensor with 26,000 DPI and 650 IPS tracking',
        'Honeycomb-free solid ultralight shell weighing only 52 grams',
        'Huano optical micro switches rated for 80 million crisp clicks',
        'Up to 80 hours continuous battery life on a single USB-C charge'
      ],
      description: 'Engineered for esports excellence. The Phantom Glide 4K weighs only 52 grams with zero honeycomb holes, powered by the flagship PixArt PAW3395 optical sensor and Huano optical micro switches rated for 80 million crisp clicks.',
      images: [
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1626908013943-df94de54984c?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Sensor': 'PixArt PAW3395 (26,000 DPI)',
        'Weight': '52g Ultra-Lightweight',
        'Polling Rate': '1000Hz (4000Hz Dongle Compatible)',
        'Battery Life': '80 Hours continuous play',
        'Skates': '100% Virgin Grade PTFE',
        'Buttons': '6 Programmable Optical Switches'
      }
    },
    {
      id: 'prod-3',
      name: 'Vortex Spatial 7.1 Wireless Headset',
      category: 'Audio',
      brand: 'AudioAura',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviewsCount: 95,
      badge: 'Top Rated',
      badgeClass: 'badge-best',
      inStock: true,
      stockCount: 9,
      chips: ['Spatial 7.1', '50mm Drivers', '48h Battery'],
      brief: '50mm Titanium Drivers • 7.1 Spatial Audio • AI Noise Mic',
      highlights: [
        '50mm custom-tuned neodymium titanium drivers for pinpoint acoustic imaging',
        'Detachable broadcast-grade boom mic with AI noise suppression',
        'Breathable protein memory foam earcups with zero clamping fatigue',
        'Tri-mode connectivity: 2.4GHz low-latency dongle, Bluetooth 5.3, or 3.5mm'
      ],
      description: 'Immerse yourself into every footstep and cinematic explosion with 50mm custom-tuned neodymium titanium drivers. Features a broadcast-grade detachable AI noise-cancelling boom microphone and breathable memory foam ear cushions.',
      images: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Drivers': '50mm Neodymium Titanium Diaphragm',
        'Spatial Sound': '7.1 Virtual Surround & Spatial 3D',
        'Microphone': 'Detachable AI Noise-Cancelling Boom',
        'Battery': '48 Hours Playback (Fast 10m Charge = 4h)',
        'Connectivity': '2.4GHz Wireless / Bluetooth 5.3 / 3.5mm Aux',
        'Weight': '275g Lightweight Ergonomic Fit'
      }
    },
    {
      id: 'prod-4',
      name: 'StreamVision 4K Pro Ultra-HD Webcam',
      category: 'Streaming',
      brand: 'ClarityPro',
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviewsCount: 73,
      badge: 'Creator Choice',
      badgeClass: 'badge-new',
      inStock: true,
      stockCount: 18,
      chips: ['4K Ultra-HD', 'Sony STARVIS', 'Privacy Cover'],
      brief: 'Sony STARVIS Sensor • 4K@30FPS / 1080P@60FPS • Privacy Shutter',
      highlights: [
        'High-sensitivity Sony STARVIS sensor for crisp, noise-free low light clarity',
        'Fast auto-focus with HDR color correction and 90° wide angle lens',
        'Integrated mechanical slide cover for 100% privacy security',
        'Dual stereo beamforming noise-filtering microphones built in'
      ],
      description: 'Deliver stunning visual clarity to your video calls, Twitch streams, and YouTube content. The StreamVision 4K features a high-grade Sony STARVIS sensor that excels in low-light environments, plus dual beamforming noise-filtering microphones.',
      images: [
        'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Resolution': '4K UHD @ 30FPS / 1080P @ 60FPS',
        'Sensor': '1/2.8" Sony STARVIS CMOS',
        'Field of View': '65° / 78° / 90° Adjustable FOV',
        'Audio': 'Dual AI Noise-Reduction Mics',
        'Privacy': 'Integrated Physical Slide Cover',
        'Mounting': 'Universal Monitor Clamp + 1/4" Tripod'
      }
    },
    {
      id: 'prod-5',
      name: 'Quantum 10-in-1 Aluminium USB-C Hub',
      category: 'Productivity',
      brand: 'CoreLink',
      price: 49.99,
      originalPrice: 65.00,
      rating: 4.8,
      reviewsCount: 89,
      badge: 'Essential',
      badgeClass: 'badge-sale',
      inStock: true,
      stockCount: 30,
      chips: ['100W PD Charge', 'Dual 4K HDMI', 'Gigabit LAN'],
      brief: '100W PD Pass-through • Dual 4K HDMI • Gigabit Ethernet',
      highlights: [
        '100W USB-C Power Delivery fast charging pass-through to power your laptop',
        'Dual 4K@60Hz HDMI ports for multi-monitor workstation setups',
        'Gigabit Ethernet RJ45 port for ultra-reliable wired speeds up to 1000Mbps',
        'Precision milled aluminum enclosure with optimized thermal dissipation'
      ],
      description: 'Expand your laptop into a full workstation with a single USB-C cable. Built from sandblasted aerospace-grade aluminum that stays cool during continuous high-speed data transfers.',
      images: [
        'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Power Delivery': '100W Fast Pass-Through Charging',
        'Displays': 'Dual 4K @ 60Hz HDMI Outputs',
        'Network': 'RJ45 Gigabit Ethernet 1000Mbps',
        'Ports': '3x USB 3.2 (10Gbps), 1x Type-C Data',
        'Card Reader': 'UHS-I SD & MicroSD Dual Slot',
        'Material': 'Anodized Aluminum Alloy Shell'
      }
    },
    {
      id: 'prod-6',
      name: 'Titan Heavy-Duty Gas Spring Monitor Arm',
      category: 'Desk Gear',
      brand: 'ErgoLift',
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviewsCount: 140,
      badge: 'Ergonomic',
      badgeClass: 'badge-best',
      inStock: true,
      stockCount: 11,
      chips: ['Supports 35"', 'Gas Spring', '360° Rotate'],
      brief: 'Holds 17"-35" Screens (Up to 12kg) • 360° Rotation • Cable Routing',
      highlights: [
        'Heavy-duty automotive counterbalanced gas spring for weightless adjustments',
        'Universal VESA compatibility (75x75mm / 100x100mm quick release bracket)',
        'Supports widescreen displays from 17" up to 35" (up to 12 kg)',
        'Built-in hidden cable management channels for clean desk routing'
      ],
      description: 'Reclaim your desk surface and eliminate neck strain. The Titan arm uses a counterbalanced automotive gas-spring mechanism allowing smooth fingertip adjustments for tilt, swivel, and full vertical height.',
      images: [
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Screen Sizes': '17" to 35" Flat & Curved Displays',
        'Weight Capacity': 'Up to 12 kg (26.4 lbs)',
        'VESA Patterns': '75x75mm and 100x100mm Quick-Release',
        'Movement': '±90° Swivel, ±45° Tilt, 360° Portrait Rotate',
        'Installation': 'C-Clamp & Grommet Mount included',
        'Cable Management': 'Integrated Concealed Wire Channels'
      }
    },
    {
      id: 'prod-7',
      name: 'AeroDesk XXL Precision Stitched Desk Mat',
      category: 'Desk Gear',
      brand: 'GlidePad',
      price: 24.99,
      originalPrice: 34.99,
      rating: 4.9,
      reviewsCount: 218,
      badge: 'Popular',
      badgeClass: 'badge-best',
      inStock: true,
      stockCount: 45,
      chips: ['900x400mm', 'Spill-Proof', 'Anti-Fray Edge'],
      brief: '900x400x4mm • Water-Resistant Hydrophobic • Anti-Fray',
      highlights: [
        'Large 900mm x 400mm surface easily accommodates full-size keyboard and mouse',
        'Hydrophobic water-resistant coating repels accidental liquid spills',
        'High-density micro-weave fabric ensures pixel-accurate mouse tracking',
        'Reinforced 360° anti-fray stitched perimeter edges prevent peeling'
      ],
      description: 'The ultimate canvas for your keyboard and mouse. Made with an ultra-smooth micro-weave cloth surface optimized for both laser and optical mouse sensors, backed by a textured natural rubber anti-slip base.',
      images: [
        'https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Dimensions': '900mm x 400mm x 4mm (XXL Extended)',
        'Material': 'High-Density Micro-Textured Cloth',
        'Base': 'Heavy Textured Natural Rubber Base',
        'Edge Stitching': '360° Anti-Fray Reinforced Borders',
        'Surface': 'Hydrophobic Liquid Spill-Resistant'
      }
    },
    {
      id: 'prod-8',
      name: 'PulseSpeed 2TB NVMe Rugged External SSD',
      category: 'Productivity',
      brand: 'HyperDrive',
      price: 139.99,
      originalPrice: 179.99,
      rating: 4.9,
      reviewsCount: 67,
      badge: 'High Speed',
      badgeClass: 'badge-hot',
      inStock: true,
      stockCount: 16,
      chips: ['2050 MB/s', 'IP65 Rugged', '2TB Storage'],
      brief: '2050MB/s Read • IP65 Rugged Silicone • USB 3.2 Gen 2x2',
      highlights: [
        'Blazing transfer speeds up to 2050 MB/s for 4K video editing on the fly',
        'Shock-resistant silicone bumper withstands drops from up to 3 meters',
        'IP65 water and dust certification for field work and traveling',
        'Universal compatibility across Windows, Mac, iPad, Android, and PS5'
      ],
      description: 'Blazing fast external storage for video editors, gamers, and tech professionals. Capable of up to 2050 MB/s read speeds over USB 3.2 Gen 2x2 Type-C, protected by an IP65 water/dust resistant shock-absorbing silicone armor.',
      images: [
        'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Capacity': '2,000 GB (2TB NVMe M.2)',
        'Speed': 'Read: 2,050 MB/s | Write: 1,950 MB/s',
        'Interface': 'USB 3.2 Gen 2x2 (20 Gbps) Type-C',
        'Drop Protection': '3-Meter Shock & Impact Resistant',
        'Weather Rating': 'IP65 Water & Dust Certified',
        'Security': 'AES 256-Bit Hardware Encryption'
      }
    },
    {
      id: 'prod-9',
      name: 'MagCharge 3-in-1 Fast Wireless Stand',
      category: 'Productivity',
      brand: 'ChargeSphere',
      price: 39.99,
      originalPrice: 52.99,
      rating: 4.7,
      reviewsCount: 79,
      badge: 'New',
      badgeClass: 'badge-new',
      inStock: true,
      stockCount: 25,
      chips: ['15W MagSafe', '3-in-1 Station', 'LED Indicator'],
      brief: '15W MagSafe Phone • 5W Earbuds • 3W Smartwatch Hub',
      highlights: [
        'Charges Phone (15W), Wireless Earbuds (5W), and Smartwatch (3W) simultaneously',
        'Strong magnetic alignment holds phone vertically or in landscape standby mode',
        'Intelligent Foreign Object Detection (FOD) and temperature control safeguards',
        'Subtle sleep-friendly LED indicator automatically dims in dark rooms'
      ],
      description: 'Streamline your nightstand or workspace. Wirelessly fast-charge your phone, AirPods or earbuds, and smartwatch concurrently with strong magnetic alignment and intelligent thermal regulation.',
      images: [
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Phone Output': '15W Magnetic Quick Induction',
        'Earbuds Output': '5W Qi Wireless Pad',
        'Watch Output': '3W Integrated Magnetic Puck',
        'Input': 'Type-C QC 3.0 / PD 20W minimum',
        'Safeguards': 'FOD (Foreign Object Detection) & Temp Guard'
      }
    },
    {
      id: 'prod-10',
      name: 'AuraStudio RGB Cardioid Condenser Mic',
      category: 'Streaming',
      brand: 'SoundForge',
      price: 64.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviewsCount: 88,
      badge: 'Hot Deal',
      badgeClass: 'badge-hot',
      inStock: true,
      stockCount: 19,
      chips: ['192kHz/24-Bit', 'Tap-to-Mute', 'Shock Mount'],
      brief: '192kHz/24-Bit • Tap-to-Mute • Built-in Shock Mount',
      highlights: [
        'Large 25mm studio condenser capsule with tight cardioid noise rejection',
        'Capacitive top tap-to-mute sensor with instant RGB mute indicator',
        'Zero-latency 3.5mm real-time headphone audio monitoring jack',
        'Heavy-duty metal suspension shock mount and mesh pop filter included'
      ],
      description: 'Professional plug-and-play USB condenser microphone with zero-latency audio monitoring. Featuring an instant capacitive tap-to-mute button with dynamic RGB status indicator, all-metal shock mount, and pop filter.',
      images: [
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Polar Pattern': 'Cardioid (Front Focused Pickup)',
        'Sample Rate': '192kHz / 24-Bit Studio Fidelity',
        'Controls': 'Top Touch Tap-to-Mute & Gain Knob',
        'RGB Modes': 'Dynamic Rainbow, Breathing, Solid, Off',
        'Output': 'USB-C + 3.5mm Headphone Jack',
        'Mount': 'Anti-Vibration Suspension Bracket'
      }
    },
    {
      id: 'prod-11',
      name: 'BlazeBlade Custom Coiled Aviator Cable',
      category: 'Cables & Power',
      brand: 'ModCraft',
      price: 22.99,
      originalPrice: 29.99,
      rating: 4.9,
      reviewsCount: 132,
      badge: 'Custom',
      badgeClass: 'badge-best',
      inStock: true,
      stockCount: 38,
      chips: ['GX16 Aviator', 'Reverse Coiled', '24K Gold USB'],
      brief: 'Detachable 4-Pin Aviator • Double PET Braiding • 24K Gold',
      highlights: [
        'Heavy-duty quick-disconnect GX16 4-pin solid metal aviator connector',
        'Reverse coiled 15cm section engineered to never sag or lose tension',
        'Double-braided PET mesh sleeving over heavy-gauge copper wiring',
        '24K gold-plated USB-C to USB-A connectors for zero-corrosion contact'
      ],
      description: 'Give your mechanical keyboard the aesthetic centerpiece it deserves. Features a solid 4-pin GX16 metal aviator connector, tight reverse coils that retain their shape indefinitely, and 24K gold-plated connectors.',
      images: [
        'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Connector': 'GX16 4-Pin Metal Quick-Disconnect Aviator',
        'Coil Length': '15 cm Outer Diameter Reverse Coiled',
        'Straight Length': '1.5 Meter Extended Lead',
        'Cable Type': 'USB-C to USB-A (Gold Plated)',
        'Sleeve': 'Double-Braided PET Mesh with Techflex'
      }
    },
    {
      id: 'prod-12',
      name: 'FrostCore Ergonomic Dual-Fan Laptop Riser',
      category: 'Productivity',
      brand: 'CoolTech',
      price: 34.99,
      originalPrice: 45.99,
      rating: 4.6,
      reviewsCount: 61,
      badge: 'Sale',
      badgeClass: 'badge-sale',
      inStock: true,
      stockCount: 20,
      chips: ['Dual Silent Fans', '6 Tilt Angles', 'Aluminum Body'],
      brief: 'Dual 140mm Silent Fans • 6 Ergonomic Heights • Aluminum Body',
      highlights: [
        'Dual whisper-quiet 140mm turbine fans (1400 RPM) drop laptop temps up to 15°C',
        '6 adjustable angle settings (15° to 45°) to prevent neck and back fatigue',
        'Crafted from sandblasted anodized aluminum with non-slip silicone pads',
        'Built-in 2-port USB 2.0 hub to connect mice and external peripherals'
      ],
      description: 'Keep your gaming laptop or MacBook icy cold under intensive rendering and gaming workloads. Crafted from sandblasted aircraft aluminum with dual silent 1400RPM turbine fans and 6 adjustable ergonomic viewing angles.',
      images: [
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Cooling': 'Dual 140mm Whisper Turbine Fans (1400 RPM)',
        'Angles': '6 Ergonomic Heights (15° to 45° Adjustability)',
        'Material': 'Solid Aircraft-Grade Aluminum Alloy',
        'Hub': '2x Integrated USB 2.0 Passthrough Ports',
        'Fit': 'Compatible with 13" to 17.3" Laptops'
      }
    },
    {
      id: 'prod-13',
      name: 'ApexStudio Low-Profile Heavy Boom Arm',
      category: 'Streaming',
      brand: 'SoundForge',
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviewsCount: 52,
      badge: 'New',
      badgeClass: 'badge-new',
      inStock: true,
      stockCount: 15,
      chips: ['Low-Profile', 'Hidden Cable Track', 'All-Metal'],
      brief: 'Low-Profile Under-Monitor Reach • 360° Rotation • All-Metal',
      highlights: [
        'Low-profile arm glides seamlessly underneath monitors without blocking screen view',
        'Concealed magnetic cable management channel to hide all microphone cables',
        'Heavy-duty reinforced desk clamp supports up to 2.0 kg broadcast microphones',
        'Universal 3/8" to 5/8" threaded adapter fits Shure SM7B, Blue Yeti, and Elgato Wave'
      ],
      description: 'The cleanest microphone mounting solution for content creators and streamers. Sits low under your monitor to keep your sightlines completely open on camera while maintaining smooth 360° arm rotation.',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Max Weight': 'Supports up to 2.0 kg (4.4 lbs)',
        'Reach': 'Horizontal reach up to 740mm',
        'Rotation': '360° base rotation with tension dials',
        'Mount': 'Reinforced C-Clamp fits desks up to 60mm thick',
        'Adapter': '3/8" and 5/8" metal screw adapters included'
      }
    },
    {
      id: 'prod-14',
      name: 'Keychron K3 Pro Ultra-Slim Wireless Keyboard',
      category: 'Keyboards',
      brand: 'Keychron',
      price: 109.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviewsCount: 84,
      badge: 'Slim & Sleek',
      badgeClass: 'badge-sale',
      inStock: true,
      stockCount: 17,
      chips: ['Ultra-Slim', 'QMK/VIA', 'Low-Profile Gateron'],
      brief: 'Ultra-Thin Body • QMK/VIA Programmable • Mac & Windows',
      highlights: [
        'Innovative low-profile Gateron mechanical switches 31% slimmer than traditional',
        'Full QMK/VIA open-source key remapping and macro programming support',
        'Connects up to 3 devices simultaneously via Broadcom Bluetooth 5.1',
        'Dedicated Mac and Windows layout toggle switch with included replacement keycaps'
      ],
      description: 'The world\'s favorite ultra-slim custom wireless mechanical keyboard. Designed with low-profile Gateron switches, full QMK/VIA key programming, and seamless macOS / Windows switching.',
      images: [
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=800&q=80'
      ],
      specs: {
        'Layout': '75% Compact Ultra-Slim',
        'Switches': 'Low-Profile Gateron Mechanical (Brown Tactile)',
        'Programming': 'Full QMK/VIA Firmware Customization',
        'Connectivity': 'Bluetooth 5.1 & Wired USB Type-C',
        'Battery': '1550mAh Rechargeable Li-polymer',
        'Backlight': '22 types of RGB backlight options'
      }
    }
  ];

  // ==========================================
  // 2. APPLICATION STATE
  // ==========================================
  const state = {
    cart: JSON.parse(localStorage.getItem('chey_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('chey_wishlist') || '[]'),
    theme: localStorage.getItem('chey_theme') || 'dark',
    currentView: 'home',
    searchQuery: '',
    selectedCategory: 'all',
    selectedBrand: 'all',
    maxPrice: 200,
    inStockOnly: false,
    sortBy: 'featured',
    appliedCoupon: null,
    discountAmount: 0
  };

  // ==========================================
  // 3. PERSISTENCE HELPERS
  // ==========================================
  function saveCart() {
    localStorage.setItem('chey_cart', JSON.stringify(state.cart));
    updateCartBadges();
    renderCartDrawer();
  }

  function saveWishlist() {
    localStorage.setItem('chey_wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadges();
  }

  // ==========================================
  // 4. TOAST NOTIFICATION SYSTEM
  // ==========================================
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-card toast-${type}`;
    
    const icon = type === 'success' 
      ? '<i class="fa-solid fa-circle-check" style="color: var(--success);"></i>' 
      : '<i class="fa-solid fa-circle-info" style="color: var(--info);"></i>';
    
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // ==========================================
  // 5. CART & WISHLIST LOGIC
  // ==========================================
  function addToCart(productId, quantity = 1) {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (!prod) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        image: prod.images[0],
        category: prod.category,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`Added "${prod.name}" to cart!`, 'success');
  }

  function updateCartQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
    }
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    showToast('Item removed from cart', 'info');
  }

  function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast('Removed from wishlist', 'info');
    } else {
      state.wishlist.push(productId);
      showToast('Added to wishlist!', 'success');
    }
    saveWishlist();
    renderCurrentProductCards();
  }

  function getCartTotals() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
    const discount = state.appliedCoupon ? (subtotal * state.discountAmount) : 0;
    const tax = (subtotal - discount) * 0.05; // 5% standard sales tax
    const total = Math.max(0, subtotal - discount + shipping + (subtotal > 0 ? tax : 0));

    return {
      subtotal: subtotal.toFixed(2),
      shipping: shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`,
      discount: discount.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
      itemCount: state.cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  }

  function updateCartBadges() {
    const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-badge-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  function updateWishlistBadges() {
    const count = state.wishlist.length;
    document.querySelectorAll('.wish-badge-count').forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  // ==========================================
  // 6. ROUTER & NAVIGATION
  // ==========================================
  function navigateTo(hash, replaceState = false) {
    if (!hash.startsWith('#')) hash = '#' + hash;
    if (replaceState) {
      window.history.replaceState(null, '', hash);
    } else {
      window.location.hash = hash;
    }
    handleRoute();
  }

  function handleRoute() {
    const rawHash = window.location.hash || '#home';
    const [pathPart, queryPart] = rawHash.split('?');
    const viewName = pathPart.replace('#', '') || 'home';
    
    // Parse query params
    const params = new URLSearchParams(queryPart || '');

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active-view'));

    // Update active nav links
    document.querySelectorAll('.nav-link, .drawer-nav-link').forEach(link => {
      const targetHash = link.getAttribute('href');
      if (targetHash === `#${viewName}` || (viewName === 'product-detail' && targetHash === '#products')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    state.currentView = viewName;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle view specific rendering
    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) {
      targetSection.classList.add('active-view');
    } else {
      document.getElementById('view-home').classList.add('active-view');
      state.currentView = 'home';
    }

    if (viewName === 'home') {
      renderHomeFeatured();
    } else if (viewName === 'products') {
      if (params.has('category')) {
        state.selectedCategory = params.get('category');
        const radio = document.querySelector(`input[name="cat-filter"][value="${state.selectedCategory}"]`);
        if (radio) radio.checked = true;
      }
      if (params.has('search')) {
        state.searchQuery = params.get('search');
        const searchInput = document.getElementById('shop-search-input');
        if (searchInput) searchInput.value = state.searchQuery;
      }
      renderShopProducts();
    } else if (viewName === 'product-detail') {
      const prodId = params.get('id') || 'prod-1';
      renderProductDetail(prodId);
    } else if (viewName === 'categories') {
      renderCategoriesPage();
    } else if (viewName === 'cart') {
      renderFullCartPage();
    } else if (viewName === 'checkout') {
      renderCheckoutPage();
    }

    // Trigger intersection observers for any new content
    initScrollReveal();
  }

  // ==========================================
  // 7. COMPONENT RENDERERS
  // ==========================================

  // Generate FontAwesome Star HTML
  function renderStars(rating) {
    const full = Math.floor(rating);
    let html = '';
    for (let i = 0; i < 5; i++) {
      if (i < full) {
        html += '<i class="fa-solid fa-star"></i>';
      } else {
        html += '<i class="fa-regular fa-star"></i>';
      }
    }
    return `<span class="stars" title="${rating} out of 5 stars">${html}</span>`;
  }

  // Product Card HTML generator (Scannable, clean chips)
  function createProductCardHTML(p) {
    const isWished = state.wishlist.includes(p.id);
    const chipsHTML = (p.chips || []).map(chip => `<span class="chip">${chip}</span>`).join('');

    return `
      <div class="product-card reveal-on-scroll" data-id="${p.id}">
        <div class="card-media">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'">
          <span class="card-badge ${p.badgeClass}">${p.badge}</span>
          <div class="card-actions-quick">
            <button class="card-quick-btn ${isWished ? 'active-wish' : ''}" onclick="window.cheyApp.toggleWishlist('${p.id}')" title="Save to Wishlist">
              <i class="${isWished ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <button class="card-quick-btn" onclick="window.cheyApp.openQuickView('${p.id}')" title="Quick Preview">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-brand">${p.brand}</span>
            <div class="card-rating">
              ${renderStars(p.rating)}
              <span>${p.rating}</span>
            </div>
          </div>
          <h3 class="card-title" onclick="window.cheyApp.goToProduct('${p.id}')" title="${p.name}">
            ${p.name}
          </h3>
          <div class="card-chips">
            ${chipsHTML}
          </div>
          <div class="card-price-row">
            <div class="price-wrap">
              <span class="current-price">$${p.price.toFixed(2)}</span>
              ${p.originalPrice ? `<span class="original-price">$${p.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <button class="add-cart-btn" onclick="window.cheyApp.addToCart('${p.id}', 1)">
              <i class="fa-solid fa-cart-plus"></i>
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Render Home Featured Products
  function renderHomeFeatured() {
    const container = document.getElementById('home-featured-grid');
    if (!container) return;
    const featuredList = PRODUCTS.slice(0, 8);
    container.innerHTML = featuredList.map(p => createProductCardHTML(p)).join('');
  }

  // Render Shop Products with Filter & Sort
  function renderShopProducts() {
    const grid = document.getElementById('shop-product-grid');
    const countEl = document.getElementById('shop-results-count');
    const activeFiltersContainer = document.getElementById('shop-active-filters');
    if (!grid) return;

    let filtered = PRODUCTS.filter(p => {
      // Category filter
      if (state.selectedCategory !== 'all' && p.category.toLowerCase() !== state.selectedCategory.toLowerCase()) {
        return false;
      }
      // Brand filter
      if (state.selectedBrand !== 'all' && p.brand.toLowerCase() !== state.selectedBrand.toLowerCase()) {
        return false;
      }
      // Price filter
      if (p.price > state.maxPrice) {
        return false;
      }
      // In stock only
      if (state.inStockOnly && !p.inStock) {
        return false;
      }
      // Search query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchBrief = (p.brief || '').toLowerCase().includes(q);
        const matchDesc = p.description.toLowerCase().includes(q);
        const matchChips = (p.chips || []).some(c => c.toLowerCase().includes(q));
        if (!matchName && !matchBrand && !matchBrief && !matchDesc && !matchChips) return false;
      }
      return true;
    });

    // Sorting
    if (state.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Active tags
    if (activeFiltersContainer) {
      let tagsHTML = '';
      if (state.selectedCategory !== 'all') {
        tagsHTML += `<span class="active-tag">Category: ${state.selectedCategory} <button onclick="window.cheyApp.clearCategoryFilter()">×</button></span>`;
      }
      if (state.selectedBrand !== 'all') {
        tagsHTML += `<span class="active-tag">Brand: ${state.selectedBrand} <button onclick="window.cheyApp.clearBrandFilter()">×</button></span>`;
      }
      if (state.maxPrice < 200) {
        tagsHTML += `<span class="active-tag">Max: $${state.maxPrice} <button onclick="window.cheyApp.resetPriceFilter()">×</button></span>`;
      }
      if (state.inStockOnly) {
        tagsHTML += `<span class="active-tag">In Stock Only <button onclick="window.cheyApp.toggleStockFilter()">×</button></span>`;
      }
      if (state.searchQuery) {
        tagsHTML += `<span class="active-tag">Search: "${state.searchQuery}" <button onclick="window.cheyApp.clearSearch()">×</button></span>`;
      }
      activeFiltersContainer.innerHTML = tagsHTML;
    }

    if (countEl) {
      countEl.innerHTML = `Showing <strong>${filtered.length}</strong> of ${PRODUCTS.length} products`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3>No matching accessories found</h3>
          <p style="margin-top: 0.5rem;">Try changing your search terms or adjusting your filters.</p>
          <button class="btn btn-secondary" style="margin-top: 1.5rem;" onclick="window.cheyApp.resetAllFilters()">Reset All Filters</button>
        </div>
      `;
    } else {
      grid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    }
  }

  function renderCurrentProductCards() {
    if (state.currentView === 'home') renderHomeFeatured();
    if (state.currentView === 'products') renderShopProducts();
  }

  // Render Product Details View
  function renderProductDetail(productId) {
    const p = PRODUCTS.find(item => item.id === productId) || PRODUCTS[0];
    const container = document.getElementById('view-product-detail');
    if (!container) return;

    let thumbsHTML = p.images.map((img, idx) => `
      <button class="thumb-btn ${idx === 0 ? 'active-thumb' : ''}" onclick="window.cheyApp.switchMainImage('${img}', this)">
        <img src="${img}" alt="${p.name} view ${idx + 1}" loading="lazy">
      </button>
    `).join('');

    let specsHTML = Object.entries(p.specs).map(([key, val]) => `
      <tr>
        <th>${key}</th>
        <td>${val}</td>
      </tr>
    `).join('');

    let bulletsHTML = (p.highlights || []).map(b => `
      <div class="feature-bullet">
        <i class="fa-solid fa-check"></i>
        <span>${b}</span>
      </div>
    `).join('');

    const related = PRODUCTS.filter(item => item.category === p.category && item.id !== p.id).slice(0, 4);

    container.innerHTML = `
      <div class="container product-detail-view">
        <div class="breadcrumbs">
          <a href="#home">Home</a> <span>/</span>
          <a href="#products">Products</a> <span>/</span>
          <a href="#products?category=${encodeURIComponent(p.category)}">${p.category}</a> <span>/</span>
          <span>${p.name}</span>
        </div>

        <div class="product-detail-grid">
          <!-- Gallery -->
          <div class="detail-gallery">
            <div class="main-img-display">
              <img id="detail-main-img" src="${p.images[0]}" alt="${p.name}">
            </div>
            <div class="thumbnail-strip">
              ${thumbsHTML}
            </div>
          </div>

          <!-- Product Info -->
          <div class="detail-info">
            <span class="detail-category-tag">${p.category} • ${p.brand}</span>
            <h1 class="detail-title">${p.name}</h1>
            
            <div class="detail-reviews-row">
              ${renderStars(p.rating)}
              <strong>${p.rating}</strong>
              <span style="color: var(--text-muted);">(${p.reviewsCount} verified reviews)</span>
              <span class="stock-status-badge in-stock"><i class="fa-solid fa-circle" style="font-size: 0.55rem;"></i> In Stock (${p.stockCount} units available)</span>
            </div>

            <div class="detail-price-box">
              <span class="price-current">$${p.price.toFixed(2)}</span>
              ${p.originalPrice ? `<span class="price-old">$${p.originalPrice.toFixed(2)}</span>` : ''}
              ${p.originalPrice ? `<span class="discount-tag">Save ${(100 - (p.price / p.originalPrice * 100)).toFixed(0)}%</span>` : ''}
            </div>

            <p class="detail-description">${p.description}</p>

            ${bulletsHTML ? `
              <div class="feature-highlights-box">
                <strong style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--text-muted); margin-bottom: 0.25rem;">Key Feature Highlights</strong>
                ${bulletsHTML}
              </div>
            ` : ''}

            <div class="purchase-action-group">
              <div class="qty-selector">
                <button class="qty-btn" onclick="window.cheyApp.adjustDetailQty(-1)">-</button>
                <span class="qty-value" id="detail-qty-val">1</span>
                <button class="qty-btn" onclick="window.cheyApp.adjustDetailQty(1)">+</button>
              </div>
              <button class="btn btn-primary" onclick="window.cheyApp.addDetailToCart('${p.id}')">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Add to Cart</span>
              </button>
              <button class="btn btn-secondary" onclick="window.cheyApp.buyNow('${p.id}')">
                <i class="fa-solid fa-bolt"></i>
                <span>Buy Now</span>
              </button>
            </div>

            <div style="background: var(--bg-alt); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.875rem;">
              <div style="display: flex; align-items: center; gap: 0.6rem;"><i class="fa-solid fa-truck-fast" style="color: var(--primary);"></i> <span><strong>Free Express Shipping:</strong> Orders over $50 delivered in 1-2 business days.</span></div>
              <div style="display: flex; align-items: center; gap: 0.6rem;"><i class="fa-solid fa-shield-halved" style="color: var(--primary);"></i> <span><strong>2-Year Official Warranty:</strong> Genuine hardware replacement guarantee.</span></div>
              <div style="display: flex; align-items: center; gap: 0.6rem;"><i class="fa-solid fa-rotate-left" style="color: var(--primary);"></i> <span><strong>30-Day Hassle-Free Returns:</strong> 100% money-back satisfaction.</span></div>
            </div>
          </div>
        </div>

        <!-- Technical Specification Matrix -->
        <div style="margin-top: 2rem;">
          <h2 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 1.25rem;">Technical Specifications</h2>
          <table class="specs-table">
            <tbody>
              ${specsHTML}
            </tbody>
          </table>
        </div>

        <!-- Related Products -->
        ${related.length > 0 ? `
          <div style="margin-top: 4rem;">
            <div class="section-header">
              <div class="section-title-wrap">
                <h2>Related in ${p.category}</h2>
                <p>Gear that pairs perfectly with this item</p>
              </div>
            </div>
            <div class="product-grid">
              ${related.map(item => createProductCardHTML(item)).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Categories Page Grid
  function renderCategoriesPage() {
    const container = document.getElementById('categories-full-grid');
    if (!container) return;

    const categoriesData = [
      {
        name: 'Keyboards',
        desc: 'Custom mechanical, wireless switches, gasket mount and RGB setups',
        count: PRODUCTS.filter(p => p.category === 'Keyboards').length,
        img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Mice',
        desc: 'Ultralight esports mice, 4K polling rates and ergonomic sensors',
        count: PRODUCTS.filter(p => p.category === 'Mice').length,
        img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Audio',
        desc: 'Spatial 7.1 wireless headsets, studio drivers & boom microphones',
        count: PRODUCTS.filter(p => p.category === 'Audio').length,
        img: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Streaming',
        desc: '4K Ultra-HD webcams, studio condenser mics & creator boom arms',
        count: PRODUCTS.filter(p => p.category === 'Streaming').length,
        img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Productivity',
        desc: 'High-speed NVMe SSDs, 10-in-1 USB-C docks & MagSafe chargers',
        count: PRODUCTS.filter(p => p.category === 'Productivity').length,
        img: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Desk Gear',
        desc: 'Heavy-duty gas spring monitor arms, XXL precision stitched desk pads',
        count: PRODUCTS.filter(p => p.category === 'Desk Gear').length,
        img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Cables & Power',
        desc: 'Custom coiled aviator cables, braided nylon fast-charge leads',
        count: PRODUCTS.filter(p => p.category === 'Cables & Power').length,
        img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
      }
    ];

    container.innerHTML = categoriesData.map(c => `
      <div class="category-feature-card reveal-on-scroll" onclick="window.cheyApp.filterByCategory('${c.name}')">
        <div class="category-card-bg">
          <img src="${c.img}" alt="${c.name}" loading="lazy">
        </div>
        <div class="category-overlay"></div>
        <div class="category-card-info">
          <h3>${c.name}</h3>
          <p>${c.desc}</p>
          <span class="category-btn">Browse Collection (${c.count} items) <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    `).join('');
  }

  // Render Slide Cart Drawer
  function renderCartDrawer() {
    const list = document.getElementById('drawer-items-list');
    const footer = document.getElementById('drawer-footer-area');
    if (!list || !footer) return;

    if (state.cart.length === 0) {
      list.innerHTML = `
        <div class="empty-cart-state">
          <i class="fa-solid fa-cart-shopping"></i>
          <h4>Your cart is empty</h4>
          <p>Add some high-performance tech accessories to start your setup upgrade!</p>
          <button class="btn btn-primary" onclick="window.cheyApp.closeCartDrawer(); window.cheyApp.navigateTo('#products');">Browse Products</button>
        </div>
      `;
      footer.style.display = 'none';
      return;
    }

    footer.style.display = 'block';
    const totals = getCartTotals();

    list.innerHTML = state.cart.map(item => `
      <div class="cart-item-card">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-info">
          <div>
            <h4 class="cart-item-title">${item.name}</h4>
            <span class="cart-item-price">$${item.price.toFixed(2)}</span>
          </div>
          <div class="cart-item-controls">
            <div class="mini-qty-box">
              <button class="mini-qty-btn" onclick="window.cheyApp.updateCartQuantity('${item.id}', -1)">-</button>
              <span class="mini-qty-val">${item.quantity}</span>
              <button class="mini-qty-btn" onclick="window.cheyApp.updateCartQuantity('${item.id}', 1)">+</button>
            </div>
            <button class="cart-item-delete" onclick="window.cheyApp.removeFromCart('${item.id}')" title="Remove item">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');

    footer.innerHTML = `
      <div class="summary-line">
        <span>Subtotal</span>
        <span>$${totals.subtotal}</span>
      </div>
      ${state.appliedCoupon ? `
        <div class="summary-line" style="color: var(--success);">
          <span>Promo (${state.appliedCoupon})</span>
          <span>-$${totals.discount}</span>
        </div>
      ` : ''}
      <div class="summary-line">
        <span>Shipping Estimator</span>
        <span>${totals.shipping}</span>
      </div>
      <div class="summary-line total-line">
        <span>Estimated Total</span>
        <span class="total-amount">$${totals.total}</span>
      </div>
      <div style="display: flex; gap: 0.75rem;">
        <button class="btn btn-secondary" style="flex: 1;" onclick="window.cheyApp.closeCartDrawer(); window.cheyApp.navigateTo('#cart');">Full Cart View</button>
        <button class="btn btn-primary" style="flex: 1;" onclick="window.cheyApp.closeCartDrawer(); window.cheyApp.navigateTo('#checkout');">Checkout</button>
      </div>
    `;
  }

  // Full Cart View Page
  function renderFullCartPage() {
    const container = document.getElementById('full-cart-page-content');
    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 5rem 1rem;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem; color: var(--text-muted);"><i class="fa-solid fa-cart-shopping"></i></div>
          <h2>Your shopping cart is currently empty</h2>
          <p style="color: var(--text-muted); margin: 0.75rem 0 2rem;">Explore our store to find precision mechanical keyboards, esports mice, audio gear and desk accessories.</p>
          <button class="btn btn-primary" onclick="window.cheyApp.navigateTo('#products')">Explore Accessories</button>
        </div>
      `;
      return;
    }

    const totals = getCartTotals();

    container.innerHTML = `
      <div class="checkout-view-layout">
        <!-- Cart Items List -->
        <div>
          <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 1.5rem;">Cart Items (${totals.itemCount})</h2>
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${state.cart.map(item => `
              <div class="checkout-form-card" style="padding: 1.25rem; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; gap: 1.25rem;">
                  <img src="${item.image}" alt="${item.name}" style="width: 72px; height: 72px; border-radius: var(--radius-sm); object-fit: cover;">
                  <div>
                    <h4 style="font-size: 1.05rem; font-weight: 700;">${item.name}</h4>
                    <span style="font-family: var(--font-mono); font-weight: 700; color: var(--primary);">$${item.price.toFixed(2)} each</span>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1.5rem;">
                  <div class="qty-selector" style="height: 40px;">
                    <button class="qty-btn" style="width: 34px;" onclick="window.cheyApp.updateCartQuantity('${item.id}', -1)">-</button>
                    <span class="qty-value" style="width: 36px;">${item.quantity}</span>
                    <button class="qty-btn" style="width: 34px;" onclick="window.cheyApp.updateCartQuantity('${item.id}', 1)">+</button>
                  </div>
                  <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.15rem; min-width: 80px; text-align: right;">
                    $${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button onclick="window.cheyApp.removeFromCart('${item.id}')" style="color: var(--danger); font-size: 1.1rem; cursor: pointer;"><i class="fa-solid fa-trash-can"></i></button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Order Summary Card -->
        <div>
          <div class="checkout-form-card">
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1.25rem;">Order Summary</h3>
            
            <div class="summary-line">
              <span>Items Subtotal</span>
              <span>$${totals.subtotal}</span>
            </div>
            ${state.appliedCoupon ? `
              <div class="summary-line" style="color: var(--success);">
                <span>Discount (${state.appliedCoupon})</span>
                <span>-$${totals.discount}</span>
              </div>
            ` : ''}
            <div class="summary-line">
              <span>Estimated Shipping</span>
              <span>${totals.shipping}</span>
            </div>
            <div class="summary-line">
              <span>Estimated Tax (5%)</span>
              <span>$${totals.tax}</span>
            </div>
            <div class="summary-line total-line">
              <span>Order Total</span>
              <span class="total-amount">$${totals.total}</span>
            </div>

            <!-- Promo Input -->
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
              <input type="text" id="promo-input" placeholder="Promo code (CHEY10)" style="flex: 1; padding: 0.6rem 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-strong); background: var(--bg-alt); color: var(--text-main); text-transform: uppercase;">
              <button class="btn btn-secondary" onclick="window.cheyApp.applyPromoCode()">Apply</button>
            </div>
            <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: -1rem; margin-bottom: 1.5rem;">Tip: Try code <strong>CHEY10</strong> for 10% off or <strong>TECH20</strong> for 20% off.</p>

            <button class="btn btn-primary" style="width: 100%;" onclick="window.cheyApp.navigateTo('#checkout')">
              Proceed to Secure Checkout →
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Checkout Page
  function renderCheckoutPage() {
    const container = document.getElementById('checkout-page-content');
    if (!container) return;

    if (state.cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 5rem 1rem;">
          <h2>No items to checkout</h2>
          <p style="color: var(--text-muted); margin: 0.5rem 0 2rem;">Please add items to your cart before proceeding to checkout.</p>
          <button class="btn btn-primary" onclick="window.cheyApp.navigateTo('#products')">Start Shopping</button>
        </div>
      `;
      return;
    }

    const totals = getCartTotals();

    container.innerHTML = `
      <div class="checkout-view-layout">
        <!-- Form Steps -->
        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <!-- Step 1: Customer Contact & Shipping -->
          <div class="checkout-form-card">
            <h3 class="form-step-title">
              <span class="step-number">1</span>
              <span>Shipping Information</span>
            </h3>
            <div class="form-grid-2">
              <div class="form-group">
                <label for="co-first-name">First Name *</label>
                <input type="text" id="co-first-name" placeholder="Sokha" required value="Sokha">
              </div>
              <div class="form-group">
                <label for="co-last-name">Last Name *</label>
                <input type="text" id="co-last-name" placeholder="Chan" required value="Chan">
              </div>
            </div>
            <div class="form-group">
              <label for="co-email">Email Address *</label>
              <input type="email" id="co-email" placeholder="cheyaccessories@email.com" required value="sokha.tech@example.com">
            </div>
            <div class="form-group">
              <label for="co-phone">Phone Number *</label>
              <input type="tel" id="co-phone" placeholder="+855 96 666 666" required value="+855 96 888 777">
            </div>
            <div class="form-group">
              <label for="co-address">Street Address *</label>
              <input type="text" id="co-address" placeholder="St. 214, Riverside District" required value="Preah Monivong Blvd, Sangkat Boeung Keng Kang">
            </div>
            <div class="form-grid-2">
              <div class="form-group">
                <label for="co-city">City / Province *</label>
                <select id="co-city">
                  <option selected>Phnom Penh</option>
                  <option>Kampot</option>
                  <option>Siem Reap</option>
                  <option>Battambang</option>
                  <option>Sihanoukville</option>
                </select>
              </div>
              <div class="form-group">
                <label for="co-zip">Postal / Delivery Code</label>
                <input type="text" id="co-zip" placeholder="12000" value="12301">
              </div>
            </div>
          </div>

          <!-- Step 2: Payment Method -->
          <div class="checkout-form-card">
            <h3 class="form-step-title">
              <span class="step-number">2</span>
              <span>Payment Method</span>
            </h3>
            <div class="payment-methods-grid">
              <div class="payment-option-card selected" onclick="window.cheyApp.selectPayment('card', this)">
                <div style="font-size: 1.4rem; margin-bottom: 0.25rem; color: var(--primary);"><i class="fa-solid fa-credit-card"></i></div>
                <strong>Credit / Debit</strong>
                <p style="font-size: 0.75rem; color: var(--text-muted);">Visa, MasterCard</p>
              </div>
              <div class="payment-option-card" onclick="window.cheyApp.selectPayment('aba', this)">
                <div style="font-size: 1.4rem; margin-bottom: 0.25rem; color: var(--primary);"><i class="fa-solid fa-qrcode"></i></div>
                <strong>ABA PAY / KHQR</strong>
                <p style="font-size: 0.75rem; color: var(--text-muted);">Instant Scan</p>
              </div>
              <div class="payment-option-card" onclick="window.cheyApp.selectPayment('cod', this)">
                <div style="font-size: 1.4rem; margin-bottom: 0.25rem; color: var(--primary);"><i class="fa-solid fa-money-bill-wave"></i></div>
                <strong>Cash on Delivery</strong>
                <p style="font-size: 0.75rem; color: var(--text-muted);">Pay upon arrival</p>
              </div>
            </div>

            <div id="card-fields-box">
              <div class="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="4242 •••• •••• 4242" value="4242 8890 1234 5678">
              </div>
              <div class="form-grid-2">
                <div class="form-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" value="08/28">
                </div>
                <div class="form-group">
                  <label>CVC / CVV</label>
                  <input type="text" placeholder="123" value="888">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Summary -->
        <div>
          <div class="checkout-form-card" style="position: sticky; top: 96px;">
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1.25rem;">Your Order Review</h3>
            
            <div style="max-height: 240px; overflow-y: auto; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              ${state.cart.map(i => `
                <div style="display: flex; justify-content: space-between; font-size: 0.875rem;">
                  <span style="color: var(--text-muted);">${i.quantity}x ${i.name}</span>
                  <span style="font-family: var(--font-mono); font-weight: 700;">$${(i.price * i.quantity).toFixed(2)}</span>
                </div>
              `).join('')}
            </div>

            <div class="summary-line">
              <span>Subtotal</span>
              <span>$${totals.subtotal}</span>
            </div>
            ${state.appliedCoupon ? `
              <div class="summary-line" style="color: var(--success);">
                <span>Discount (${state.appliedCoupon})</span>
                <span>-$${totals.discount}</span>
              </div>
            ` : ''}
            <div class="summary-line">
              <span>Shipping Fee</span>
              <span>${totals.shipping}</span>
            </div>
            <div class="summary-line">
              <span>Estimated Tax (5%)</span>
              <span>$${totals.tax}</span>
            </div>
            <div class="summary-line total-line">
              <span>Total Due</span>
              <span class="total-amount">$${totals.total}</span>
            </div>

            <button class="btn btn-primary" style="width: 100%; padding: 1rem;" onclick="window.cheyApp.placeOrder()">
              <i class="fa-solid fa-lock"></i> Complete Order Now ($${totals.total})
            </button>
            <p style="text-align: center; font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem;">
              <i class="fa-solid fa-shield-halved"></i> 256-bit SSL encrypted checkout. Mock store demonstration.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // 8. FLASH COUNTDOWN TIMER
  // ==========================================
  function initCountdownTimer() {
    let hours = 14;
    let minutes = 28;
    let seconds = 45;

    const elHours = document.getElementById('cd-hours');
    const elMins = document.getElementById('cd-mins');
    const elSecs = document.getElementById('cd-secs');

    if (!elHours || !elMins || !elSecs) return;

    setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else {
        seconds = 59;
        if (minutes > 0) {
          minutes--;
        } else {
          minutes = 59;
          if (hours > 0) {
            hours--;
          } else {
            hours = 24;
          }
        }
      }

      elHours.textContent = hours < 10 ? '0' + hours : hours;
      elMins.textContent = minutes < 10 ? '0' + minutes : minutes;
      elSecs.textContent = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
  }

  // ==========================================
  // 9. SCROLL REVEAL OBSERVER
  // ==========================================
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-on-scroll:not(.is-visible)').forEach(el => observer.observe(el));
  }

  // ==========================================
  // 10. EVENT HANDLERS & PUBLIC API
  // ==========================================
  window.cheyApp = {
    // Navigation
    navigateTo,
    goToProduct: (id) => navigateTo(`#product-detail?id=${id}`),
    filterByCategory: (cat) => navigateTo(`#products?category=${encodeURIComponent(cat)}`),

    // Cart actions
    addToCart,
    updateCartQuantity,
    removeFromCart,
    toggleWishlist,

    // Cart Drawer Controls
    openCartDrawer: () => {
      document.getElementById('cart-drawer-overlay').classList.add('active');
      document.getElementById('cart-drawer-panel').classList.add('active');
      renderCartDrawer();
    },
    closeCartDrawer: () => {
      document.getElementById('cart-drawer-overlay').classList.remove('active');
      document.getElementById('cart-drawer-panel').classList.remove('active');
    },

    // Detail page helpers
    switchMainImage: (src, btn) => {
      const img = document.getElementById('detail-main-img');
      if (img) img.src = src;
      document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active-thumb'));
      if (btn) btn.classList.add('active-thumb');
    },
    adjustDetailQty: (delta) => {
      const el = document.getElementById('detail-qty-val');
      if (!el) return;
      let val = parseInt(el.textContent, 10) + delta;
      if (val < 1) val = 1;
      el.textContent = val;
    },
    addDetailToCart: (id) => {
      const el = document.getElementById('detail-qty-val');
      const qty = el ? parseInt(el.textContent, 10) : 1;
      addToCart(id, qty);
    },
    buyNow: (id) => {
      addToCart(id, 1);
      navigateTo('#checkout');
    },

    // Quick View Modal
    openQuickView: (id) => {
      const p = PRODUCTS.find(item => item.id === id);
      if (!p) return;
      const modal = document.getElementById('quick-view-modal');
      const content = document.getElementById('quick-view-content');
      if (!modal || !content) return;

      const chipsHTML = (p.chips || []).map(chip => `<span class="chip">${chip}</span>`).join('');

      content.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 2rem;">
          <div style="height: 320px; border-radius: var(--radius-md); overflow: hidden; background: var(--bg-alt);">
            <img src="${p.images[0]}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div>
            <span style="color: var(--primary); font-weight: 800; font-size: 0.8rem; text-transform: uppercase;">${p.category} • ${p.brand}</span>
            <h2 style="font-size: 1.5rem; font-weight: 800; margin: 0.35rem 0 0.65rem;">${p.name}</h2>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem;">
              ${renderStars(p.rating)}
              <span style="font-weight: 700;">${p.rating}</span>
              <span style="color: var(--text-muted); font-size: 0.85rem;">(${p.reviewsCount} reviews)</span>
            </div>
            <div style="font-size: 1.7rem; font-weight: 800; font-family: var(--font-mono); margin-bottom: 0.85rem; color: var(--primary);">
              $${p.price.toFixed(2)}
              ${p.originalPrice ? `<span style="font-size: 1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 0.5rem;">$${p.originalPrice.toFixed(2)}</span>` : ''}
            </div>
            <div class="card-chips" style="margin-bottom: 1rem;">
              ${chipsHTML}
            </div>
            <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.5rem;">${p.description}</p>
            <div style="display: flex; gap: 0.75rem;">
              <button class="btn btn-primary" onclick="window.cheyApp.addToCart('${p.id}', 1); window.cheyApp.closeModal();">Add to Cart</button>
              <button class="btn btn-secondary" onclick="window.cheyApp.closeModal(); window.cheyApp.goToProduct('${p.id}');">Full Details</button>
            </div>
          </div>
        </div>
      `;
      modal.classList.add('active');
    },
    closeModal: () => {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    },

    // Filter controls
    clearCategoryFilter: () => {
      state.selectedCategory = 'all';
      const allRadio = document.querySelector('input[name="cat-filter"][value="all"]');
      if (allRadio) allRadio.checked = true;
      renderShopProducts();
    },
    clearBrandFilter: () => {
      state.selectedBrand = 'all';
      const brandSelect = document.getElementById('shop-brand-select');
      if (brandSelect) brandSelect.value = 'all';
      renderShopProducts();
    },
    resetPriceFilter: () => {
      state.maxPrice = 200;
      const slider = document.getElementById('price-slider');
      if (slider) slider.value = 200;
      const label = document.getElementById('price-slider-val');
      if (label) label.textContent = '$200';
      renderShopProducts();
    },
    toggleStockFilter: () => {
      state.inStockOnly = !state.inStockOnly;
      const cb = document.getElementById('stock-only-cb');
      if (cb) cb.checked = state.inStockOnly;
      renderShopProducts();
    },
    clearSearch: () => {
      state.searchQuery = '';
      const input = document.getElementById('shop-search-input');
      const navInput = document.getElementById('nav-search-input');
      if (input) input.value = '';
      if (navInput) navInput.value = '';
      renderShopProducts();
    },
    resetAllFilters: () => {
      state.selectedCategory = 'all';
      state.selectedBrand = 'all';
      state.maxPrice = 200;
      state.inStockOnly = false;
      state.searchQuery = '';
      state.sortBy = 'featured';

      const allRadio = document.querySelector('input[name="cat-filter"][value="all"]');
      if (allRadio) allRadio.checked = true;
      const brandSelect = document.getElementById('shop-brand-select');
      if (brandSelect) brandSelect.value = 'all';
      const slider = document.getElementById('price-slider');
      if (slider) slider.value = 200;
      const label = document.getElementById('price-slider-val');
      if (label) label.textContent = '$200';
      const cb = document.getElementById('stock-only-cb');
      if (cb) cb.checked = false;
      const sortSelect = document.getElementById('shop-sort-select');
      if (sortSelect) sortSelect.value = 'featured';

      renderShopProducts();
    },

    // Promo code handler
    applyPromoCode: () => {
      const input = document.getElementById('promo-input');
      if (!input) return;
      const code = input.value.trim().toUpperCase();
      if (code === 'CHEY10') {
        state.appliedCoupon = 'CHEY10 (10% OFF)';
        state.discountAmount = 0.10;
        showToast('Coupon CHEY10 applied: 10% discount!', 'success');
        renderFullCartPage();
        renderCartDrawer();
      } else if (code === 'TECH20') {
        state.appliedCoupon = 'TECH20 (20% OFF)';
        state.discountAmount = 0.20;
        showToast('Coupon TECH20 applied: 20% discount!', 'success');
        renderFullCartPage();
        renderCartDrawer();
      } else {
        showToast('Invalid or expired coupon code', 'danger');
      }
    },

    // Checkout payment method
    selectPayment: (type, el) => {
      document.querySelectorAll('.payment-option-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
      const cardBox = document.getElementById('card-fields-box');
      if (cardBox) {
        cardBox.style.display = type === 'card' ? 'block' : 'none';
      }
    },

    // Order Placement
    placeOrder: () => {
      const orderId = 'CHEY-' + Math.floor(100000 + Math.random() * 900000);
      const totals = getCartTotals();
      
      const modal = document.getElementById('order-success-modal');
      const content = document.getElementById('order-success-content');
      if (!modal || !content) return;

      content.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 0.5rem;">
          <div style="width: 72px; height: 72px; border-radius: var(--radius-full); background: rgba(16, 185, 129, 0.15); color: var(--success); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 1.5rem;">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">Order Confirmed!</h2>
          <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 1.5rem;">
            Thank you for shopping with Chey Accessories. Your order has been placed successfully.
          </p>
          <div style="background: var(--bg-alt); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; text-align: left; margin-bottom: 1.75rem; font-size: 0.9rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: var(--text-muted);">Order Tracking ID:</span>
              <strong style="font-family: var(--font-mono); color: var(--primary);">${orderId}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: var(--text-muted);">Total Paid:</span>
              <strong style="font-family: var(--font-mono);">$${totals.total}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: var(--text-muted);">Estimated Delivery:</span>
              <strong>1 - 2 Business Days (Cambodia Express)</strong>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-muted);">Confirmation Sent To:</span>
              <strong>sokha.tech@example.com</strong>
            </div>
          </div>
          <button class="btn btn-primary" style="width: 100%;" onclick="window.cheyApp.closeModal(); window.cheyApp.navigateTo('#home');">
            Continue Shopping
          </button>
        </div>
      `;

      // Clear cart
      state.cart = [];
      state.appliedCoupon = null;
      state.discountAmount = 0;
      saveCart();

      modal.classList.add('active');
    },

    // Theme Switcher
    toggleTheme: () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('chey_theme', state.theme);
      updateThemeIcon();
    },

    // Mobile Drawer
    toggleMobileDrawer: (open) => {
      const drawer = document.getElementById('mobile-nav-drawer');
      const overlay = document.getElementById('mobile-drawer-overlay');
      if (open) {
        drawer.classList.add('active');
        overlay.classList.add('active');
      } else {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
  };

  function updateThemeIcon() {
    const icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.className = state.theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  // ==========================================
  // 11. INITIALIZATION & EVENT LISTENERS
  // ==========================================
  document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();

    // Initial badge values
    updateCartBadges();
    updateWishlistBadges();

    // Start flash deal countdown timer
    initCountdownTimer();

    // Router listener
    window.addEventListener('hashchange', handleRoute);

    // Initial Route
    handleRoute();

    // Search bar listener (in Navbar)
    const navSearchInput = document.getElementById('nav-search-input');
    if (navSearchInput) {
      navSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          const val = navSearchInput.value.trim();
          navigateTo(`#products?search=${encodeURIComponent(val)}`);
        }
      });
    }

    // Shop Page Search listener
    const shopSearchInput = document.getElementById('shop-search-input');
    if (shopSearchInput) {
      shopSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderShopProducts();
      });
    }

    // Shop Category Radios
    document.querySelectorAll('input[name="cat-filter"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        state.selectedCategory = e.target.value;
        renderShopProducts();
      });
    });

    // Shop Brand Filter
    const brandSelect = document.getElementById('shop-brand-select');
    if (brandSelect) {
      brandSelect.addEventListener('change', (e) => {
        state.selectedBrand = e.target.value;
        renderShopProducts();
      });
    }

    // Shop Price Slider
    const priceSlider = document.getElementById('price-slider');
    const priceLabel = document.getElementById('price-slider-val');
    if (priceSlider && priceLabel) {
      priceSlider.addEventListener('input', (e) => {
        state.maxPrice = parseFloat(e.target.value);
        priceLabel.textContent = `$${state.maxPrice}`;
        renderShopProducts();
      });
    }

    // Shop Stock Checkbox
    const stockCb = document.getElementById('stock-only-cb');
    if (stockCb) {
      stockCb.addEventListener('change', (e) => {
        state.inStockOnly = e.target.checked;
        renderShopProducts();
      });
    }

    // Shop Sort Dropdown
    const sortSelect = document.getElementById('shop-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderShopProducts();
      });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
          showToast(`Subscribed! 10% coupon sent to ${emailInput.value}`, 'success');
          emailInput.value = '';
        }
      });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-us-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Thank you! Your message has been sent to our Chey support team.', 'success');
        contactForm.reset();
      });
    }

    // Close modal on backdrop click
    document.querySelectorAll('.modal-backdrop').forEach(m => {
      m.addEventListener('click', (e) => {
        if (e.target === m) window.cheyApp.closeModal();
      });
    });

    // Close drawers on backdrop click
    const cartOverlay = document.getElementById('cart-drawer-overlay');
    if (cartOverlay) {
      cartOverlay.addEventListener('click', window.cheyApp.closeCartDrawer);
    }
    const mobileOverlay = document.getElementById('mobile-drawer-overlay');
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', () => window.cheyApp.toggleMobileDrawer(false));
    }
  });

})();
