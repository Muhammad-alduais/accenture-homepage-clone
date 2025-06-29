'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  const { locale, t, isRTL, switchLanguage } = useLanguage()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setShowLanguageMenu(false)
        setActiveDropdown(null)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const logoVariants = {
    initial: { scale: 0, rotate: isRTL ? 180 : -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    }
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const navItems = [
    { 
      key: 'nav.platform', 
      href: '#services', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'platform.coreModules', href: '#services' },
        { key: 'platform.aiFeatures', href: '#services' },
        { key: 'platform.integration', href: '#services' },
        { key: 'platform.mobileCloud', href: '#services' }
      ]
    },
    { 
      key: 'nav.industries', 
      href: '#industries', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'industries.education', href: '#industries' },
        { key: 'industries.retail', href: '#industries' },
        { key: 'industries.manufacturing', href: '#industries' },
        { key: 'industries.logistics', href: '#industries' },
        { key: 'industries.viewAll', href: '#industries' }
      ]
    },
    { 
      key: 'nav.whyMovinware', 
      href: '#about', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'whyMovinware.story', href: '#about' },
        { key: 'whyMovinware.methodology', href: '#about' },
        { key: 'whyMovinware.success', href: '#about' },
        { key: 'whyMovinware.expertise', href: '#about' }
      ]
    },
    { 
      key: 'nav.pricing', 
      href: '#contact', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'pricing.startup', href: '#contact' },
        { key: 'pricing.sme', href: '#contact' },
        { key: 'pricing.enterprise', href: '#contact' },
        { key: 'pricing.custom', href: '#contact' }
      ]
    },
    { 
      key: 'nav.resources', 
      href: '#contact', 
      hasDropdown: true,
      dropdownItems: [
        { key: 'resources.documentation', href: '#contact' },
        { key: 'resources.tutorials', href: '#contact' },
        { key: 'resources.caseStudies', href: '#about' },
        { key: 'resources.blog', href: '#contact' },
        { key: 'resources.support', href: '#contact' }
      ]
    }
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  const handleDropdownToggle = (itemKey: string) => {
    setActiveDropdown(activeDropdown === itemKey ? null : itemKey)
  }

  const handleGetDemo = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Skip to main content link */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-primary text-white px-4 py-2 rounded-lg z-[60]"
      >
        {t('nav.skipToMain')}
      </a>

      {/* Fixed Header Container */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
        variants={headerVariants}
        initial="initial"
        animate="animate"
        role="banner"
      >
        {/* Centered Rounded Navbar */}
        <motion.nav 
          ref={navRef}
          className={`max-w-6xl mx-auto transition-all duration-500 ease-out ${
            scrolled 
              ? 'bg-white/25 dark:bg-gray-900/40 backdrop-blur-xl shadow-lg' 
              : 'bg-white/20 dark:bg-gray-900/30 backdrop-blur-lg shadow-md'
          }`}
          style={{
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
          animate={{
            scale: scrolled ? 0.98 : 1,
            y: scrolled ? 4 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label={t('nav.mainNavigation')}
        >
          <div className={`flex items-center justify-between h-16 px-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a 
                href={`/${locale}`}
                className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
                aria-label={t('nav.homeLink')}
              >
                <motion.div 
                  className="relative w-10 h-10"
                  variants={logoVariants}
                  aria-hidden="true"
                >
                  {/* Your Actual Logo with Brand Color */}
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 366 385" 
                    className="w-full h-full"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(29%) sepia(89%) saturate(1729%) hue-rotate(240deg) brightness(95%) contrast(91%)'
                    }}
                  >
                    <path 
                      fill="currentColor" 
                      d="M245.000000,386.000000 C163.333344,386.000000 82.166695,386.000000 1.000033,386.000000 C1.000022,257.666718 1.000022,129.333405 1.000011,1.000084 C122.999939,1.000056 244.999878,1.000056 366.999878,1.000028 C366.999908,129.333252 366.999908,257.666504 366.999939,385.999878 C326.500000,386.000000 286.000000,386.000000 245.000000,386.000000 M128.342987,228.688583 C128.342987,228.688583 128.567627,228.270676 128.567627,228.270676 C128.567627,228.270676 128.275696,227.896683 128.585129,227.348236 C128.662201,227.152985 128.739258,226.957733 129.472916,226.532196 C130.938583,222.681061 132.404266,218.829941 134.115005,214.315643 C135.888702,211.184372 137.857971,208.146591 139.406342,204.907608 C158.094177,165.815170 176.730484,126.698097 195.356003,87.575912 C202.038254,73.540115 208.655426,59.473331 215.415512,45.181358 C210.732895,44.825562 206.367065,44.493839 201.101044,44.022774 C189.384171,44.013210 177.667313,43.999168 165.950439,43.995316 C153.961899,43.991375 141.972458,43.929638 129.986099,44.092281 C128.620178,44.110817 127.271660,45.412209 125.517387,46.681965 C118.199265,61.903465 110.871376,77.120277 103.566460,92.348114 C98.694122,102.504982 93.854500,112.677559 88.402283,123.232132 C86.359688,127.875191 84.317101,132.518250 82.211349,137.165863 C82.211349,137.165863 82.218704,137.228775 81.553192,137.232712 C81.490280,137.367142 81.357513,137.514008 81.378784,137.633453 C81.425117,137.893784 81.549881,138.140137 81.525726,138.763214 C81.525726,138.763214 81.309395,139.086487 80.581650,139.219620 C78.842911,142.551941 76.939346,145.811035 75.416183,149.239151 C74.136948,152.118286 73.300964,155.194366 72.113083,158.054825 C72.113083,158.054825 72.234558,158.215958 71.531158,158.309814 C71.122322,159.608215 70.713486,160.906631 70.225945,162.182938 C70.225945,162.182938 70.243813,162.262711 69.524414,162.285736 C67.722443,166.555008 65.920479,170.824280 64.021080,174.993195 C64.021080,174.993195 64.126770,175.090439 63.506805,175.193634 C63.331295,175.777695 63.155785,176.361740 62.446350,177.296967 C62.351017,177.913269 62.255684,178.529587 62.021267,179.015381 C62.021267,179.015381 62.179993,179.121140 61.517723,179.256561 C61.456577,179.896637 61.395432,180.536697 61.283047,181.207535 C61.283047,181.207535 61.253353,181.259399 60.529613,181.254425 C57.420422,188.227463 54.311226,195.200516 51.018597,201.992279 C51.018597,201.992279 51.208603,202.170074 50.491974,202.262146 C48.989788,205.851257 47.487602,209.440384 45.998611,212.987335 C45.998611,212.987335 46.041832,212.996460 45.324772,213.104141 C44.627666,214.841156 43.930565,216.578186 43.180897,218.616135 C43.180897,218.616135 43.060555,218.896927 42.392300,219.079681 C42.358658,219.495712 42.325012,219.911758 42.277000,220.653030 C42.277000,220.653030 42.223049,220.974075 41.546638,221.258224 C41.152660,222.584335 40.758682,223.910461 40.305984,225.256714 C40.305984,225.256714 40.288296,225.316223 39.565262,225.279175 C37.435146,230.229782 35.305027,235.180405 33.050350,239.982513 C33.050350,239.982513 33.186272,240.126190 32.539124,240.230057 C32.363129,240.845383 32.187134,241.460693 31.431875,242.456238 C28.350801,249.118729 25.631695,255.982895 22.069309,262.377228 C19.419682,267.133209 19.689333,270.973572 23.301800,275.352386 C23.403383,275.484680 23.504965,275.616943 23.465139,276.494446 C26.026817,281.582916 28.588493,286.671417 31.115889,291.875916 C31.115889,291.875916 31.235912,291.891052 31.212105,292.553802 C31.858297,293.655396 32.504490,294.757019 33.297039,296.386444 C33.392227,296.542236 33.487419,296.698059 33.394123,297.298706 C33.485130,297.660675 33.716724,297.854340 34.048470,297.952209 C34.048470,297.952209 34.131493,297.953125 34.139839,298.601837 C34.509026,299.121002 34.878212,299.640137 35.569782,300.475159 C35.569782,300.475159 35.860161,300.820709 35.425392,301.354156 C36.012360,302.494202 36.599327,303.634277 37.768105,305.236816 C40.645100,311.516815 43.498722,317.807617 46.404041,324.074493 C52.093513,336.346863 57.811832,348.605896 63.901154,361.693512 C65.301826,359.811188 66.327354,358.814697 66.900887,357.604034 C73.572403,343.521118 80.228119,329.430115 86.754524,315.279633 C88.115929,312.327850 88.932632,309.124786 90.584602,305.666687 C92.720284,301.438629 94.855965,297.210602 96.997040,292.997314 C96.997040,292.997314 96.981766,292.998688 97.541039,292.732086 C97.689857,292.147949 97.838676,291.563812 97.998436,290.996643 C97.998436,290.996643 97.979492,290.993652 98.527657,290.714935 C98.662231,290.129333 98.796806,289.543701 99.001671,288.994965 C99.001671,288.994965 98.938805,288.945404 99.483444,288.674622 C99.639557,288.106598 99.795670,287.538544 100.001343,286.997009 C100.001343,286.997009 99.955917,286.961823 100.483849,286.669250 C100.629074,286.098969 100.774300,285.528656 101.000488,284.987518 C101.000488,284.987518 100.934319,284.932373 101.413345,284.737671 C101.470627,284.423218 101.527901,284.108795 101.804848,283.402252 C101.804848,283.402252 101.895653,282.962067 102.385605,282.756989 C102.431946,282.436707 102.478287,282.116425 102.756409,281.383148 C102.756409,281.383148 102.875008,280.924652 103.387505,280.619995 C103.549690,280.067474 103.711868,279.514923 103.955597,278.958252 C103.955597,278.958252 103.915329,278.887238 104.374481,278.716248 C104.682709,278.434540 104.692139,278.143097 104.688934,277.379730 C104.747208,277.208130 104.805481,277.036560 105.359047,276.731171 C105.386490,276.427704 105.413940,276.124207 105.704765,275.377960 C105.753677,275.213318 105.802582,275.048706 106.406693,274.651581 C106.505821,274.071228 106.604958,273.490906 106.858086,272.899872 C106.858086,272.899872 106.847137,272.745880 107.501129,272.530731 C110.915604,264.988037 114.330078,257.445343 117.892441,249.871460 C117.892441,249.871460 117.860291,249.723785 118.301781,249.672897 C118.301781,249.672897 118.502335,249.276062 118.502335,249.276062 C118.502335,249.276062 118.192039,248.957779 118.527855,248.369080 C118.626015,248.165604 118.724174,247.962143 119.476051,247.525909 C121.594673,242.654953 123.713303,237.783981 125.915184,232.919601 C125.915184,232.919601 125.896820,232.838150 126.386162,232.724777 C126.440239,232.626755 126.548599,232.521896 126.537270,232.432129 C126.512436,232.235397 126.426964,232.046326 126.642212,231.346771 C126.702820,231.164047 126.763435,230.981308 127.369209,230.603470 C127.483078,230.049759 127.596947,229.496063 127.870148,228.910141 C127.870148,228.910141 127.873154,228.747620 128.342987,228.688583 M231.951935,207.940887 C231.951935,207.940887 231.922180,207.780777 232.460144,207.606506 C232.565857,207.068390 232.671570,206.530258 232.956009,205.925156 C232.956009,205.925156 232.906250,205.740891 233.394150,205.515305 C233.515335,205.002060 233.636520,204.488815 233.939484,203.934601 C233.939484,203.934601 233.908798,203.750824 234.462982,203.455200 C234.904327,202.286011 235.345688,201.116821 235.951416,199.933548 C235.951416,199.933548 235.928818,199.770111 236.354446,199.693985 C236.354446,199.693985 236.578644,199.323364 236.578644,199.323364 C236.578644,199.323364 236.336441,198.964188 236.691177,198.383789 C236.758682,198.167313 236.826187,197.950851 237.393448,197.535049 C237.491089,197.015610 237.588730,196.496185 237.898285,195.934402 C237.898285,195.934402 237.901901,195.718307 238.522507,195.463364 C239.864426,192.660263 241.218323,189.862823 242.546005,187.052994 C246.204529,179.310425 249.852036,171.562653 253.781082,163.334259 C253.817902,163.152405 253.854706,162.970551 254.427322,162.561386 C254.529068,162.006042 254.630814,161.450699 255.057495,160.270752 C263.148865,144.252594 271.240234,128.234421 279.562225,111.759689 C277.138306,111.267914 275.712158,110.765823 274.270996,110.718124 C252.964371,110.012924 231.651276,109.477699 210.351654,108.609558 C206.436783,108.449989 204.518494,110.515121 203.222321,113.269348 C198.518829,123.263550 194.138794,133.409363 189.550110,143.458420 C186.826889,149.422211 183.941376,155.311920 180.479904,161.474701 C180.027969,163.000427 179.576050,164.526154 179.032852,166.039017 C179.032852,166.039017 179.097290,166.104919 178.492767,166.437546 C178.133728,167.385620 177.774689,168.333694 177.241608,169.675674 C177.241608,169.675674 177.154556,170.097427 176.595795,170.341995 C176.460190,170.918076 176.324585,171.494171 176.095123,172.081177 C176.095123,172.081177 176.125198,172.170731 175.660675,172.298340 C175.660675,172.298340 175.435852,172.725555 175.435852,172.725555 C175.435852,172.725555 175.694519,173.133209 175.388580,173.650421 C175.323944,173.840027 175.259308,174.029633 174.556946,174.481262 C173.451797,177.027512 172.346649,179.573746 171.018494,182.835617 C170.073425,184.249252 168.913269,185.565109 168.218811,187.092667 C164.229065,195.868576 160.493576,204.762070 156.404846,213.490585 C145.865906,235.988937 135.120361,258.390656 124.621162,280.907349 C122.535698,285.379883 120.888374,289.803314 114.706726,289.228424 C114.022781,289.164795 113.269196,289.849884 112.154839,290.371857 C123.411552,316.262268 134.605484,342.008270 146.153366,368.568329 C148.368622,367.469910 150.724152,366.301941 153.798218,365.025269 C158.880295,361.686310 160.033264,356.126831 161.899490,350.897156 C161.899490,350.897156 161.875885,350.779358 162.488739,350.549316 C162.924255,349.340332 163.359787,348.131348 163.916321,346.906036 C163.916321,346.906036 163.884766,346.788086 164.345383,346.697083 C164.345383,346.697083 164.567322,346.282288 164.567322,346.282288 C164.567322,346.282288 164.288757,345.903168 164.599487,345.359924 C164.675537,345.165680 164.751572,344.971405 165.391602,344.619141 C165.505981,344.059662 165.620361,343.500183 165.884735,342.912994 C165.884735,342.912994 165.865814,342.761658 166.419876,342.541473 C166.501358,341.967377 166.582855,341.393250 166.859543,340.438324 C166.859543,340.438324 166.932190,340.016602 167.460770,339.695343 C167.639450,339.125916 167.818146,338.556519 167.997559,337.997955 C167.997559,337.997955 167.988419,338.002716 168.472717,337.776184 C168.524216,337.451935 168.575714,337.127655 168.823547,336.412628 C168.823547,336.412628 168.903259,335.982635 169.448151,335.691650 C169.618179,335.117676 169.788223,334.543701 170.000000,334.000000 C170.000000,334.000000 169.959503,333.967010 170.491165,333.677124 C170.639786,333.105957 170.788406,332.534760 171.002335,331.993561 C171.002335,331.993561 170.945236,331.948761 171.476898,331.664917 C171.636505,331.101471 171.796097,330.537994 172.001556,329.997009 C172.001556,329.997009 171.961441,329.963806 172.507156,329.696350 C172.634552,329.115479 172.761932,328.534607 172.977783,327.973206 C172.977783,327.973206 172.922562,327.901398 173.468124,327.651672 C173.618774,327.088501 173.769409,326.525360 174.000122,325.984680 C174.000122,325.984680 173.935776,325.931915 174.387619,325.724426 C174.687958,325.459778 174.734543,325.156097 174.771927,324.409088 C174.771927,324.409088 174.890579,323.951691 175.463943,323.592041 C175.911713,321.691833 176.359482,319.791656 177.168503,317.274567 C179.577454,313.248108 182.270279,309.362152 184.344772,305.170197 C192.107056,289.485016 199.670120,273.701233 207.302002,257.951538 C215.202393,241.647705 223.095947,225.340546 231.446991,208.826614 C231.778778,208.623856 231.893204,208.335083 231.951935,207.940887 M275.988800,268.003357 C275.988800,268.003357 275.881622,267.929260 276.486542,267.716675 C276.612549,267.110809 276.738556,266.504913 276.980347,266.009766 C276.980347,266.009766 276.856232,265.904022 277.472809,265.748077 C277.462341,265.364685 277.451874,264.981323 277.588104,264.298828 C277.588104,264.298828 277.781128,264.027344 278.408997,263.798950 C278.438538,263.394257 278.468048,262.989563 278.616699,262.302734 C278.616699,262.302734 278.773712,262.039795 279.404846,261.794922 C279.579590,261.172577 279.754333,260.550262 279.987549,259.998199 C279.987549,259.998199 279.905701,259.957397 280.490173,259.744568 C280.509796,259.361694 280.529419,258.978790 280.663086,258.307404 C280.663086,258.307404 280.805481,258.031769 281.446625,257.809540 C281.600311,257.181030 281.754028,256.552521 281.985504,256.005188 C281.985504,256.005188 281.890747,255.944351 282.471191,255.729019 C282.481415,255.348511 282.491638,254.968002 282.633575,254.310608 C282.633575,254.310608 282.800751,254.053543 283.434906,253.809219 C283.477631,253.394989 283.520325,252.980774 283.675568,252.318985 C283.675568,252.318985 283.819977,252.088608 284.443848,251.816162 C284.493561,251.399887 284.543243,250.983612 284.692261,250.330933 C284.692261,250.330933 284.824097,250.110992 285.475464,249.847061 C285.520752,249.419067 285.566010,248.991058 285.707001,248.318344 C285.707001,248.318344 285.827850,248.085007 286.419800,247.799973 C286.461823,247.398300 286.503815,246.996643 286.675110,246.318878 C286.675110,246.318878 286.832214,246.057602 287.461395,245.815201 C287.516327,245.403351 287.571289,244.991501 287.727509,244.331589 C287.727509,244.331589 287.847107,244.091827 288.433075,243.796616 C288.489441,243.393646 288.545807,242.990692 288.965851,241.992340 C302.510010,215.473877 316.054199,188.955429 329.882202,161.881256 C328.040192,161.595596 326.811920,161.281113 325.573151,161.232376 C314.648438,160.802582 303.721619,160.425476 292.796051,160.017044 C291.315186,159.961685 289.802032,159.990067 288.363922,159.690872 C275.173157,156.946823 272.768677,158.067261 267.085419,169.776596 C267.012787,169.926178 266.916290,170.064056 266.841583,170.212769 C255.704712,192.385300 244.466827,214.507889 233.465973,236.747726 C225.071060,253.719284 217.180023,270.942749 208.609924,287.823212 C206.375214,292.224854 206.266769,299.537994 197.066071,297.971893 C205.875671,319.202362 214.296539,339.496002 222.669037,359.673065 C230.277206,357.625397 230.326111,357.649719 233.219864,351.828674 C237.038361,344.147369 240.770676,336.423187 245.268097,328.819824 C245.459854,328.170837 245.651611,327.521881 245.988846,327.003326 C245.988846,327.003326 245.833054,326.884613 246.460861,326.708466 C246.572891,326.091614 246.684921,325.474731 246.990112,324.962891 C246.990112,324.962891 246.809204,324.837433 247.437363,324.748169 C247.496948,324.619812 247.620377,324.481934 247.602966,324.365051 C247.565369,324.112976 247.455414,323.871674 247.513428,323.274628 C247.513428,323.274628 247.726685,322.963013 248.400406,322.806946 C248.549576,322.164001 248.698746,321.521088 248.988663,321.005463 C248.988663,321.005463 248.841965,320.881683 249.458282,320.729401 C249.487320,320.339050 249.516342,319.948730 249.649155,319.303101 C249.649155,319.303101 249.786743,319.064270 250.424973,318.816559 C250.461502,318.400940 250.498032,317.985352 250.642868,317.296509 C250.642868,317.296509 250.789017,317.041534 251.439529,316.820618 C251.466248,316.405701 251.492950,315.990753 251.621262,315.282837 C251.621262,315.282837 251.760345,315.005646 252.366928,314.777863 C252.384460,314.388275 252.402008,313.998657 252.574097,313.296356 C252.574097,313.296356 252.772766,313.009644 253.428268,312.803345 C253.492172,312.384369 253.556076,311.965424 253.698013,311.317200 C253.698013,311.317200 253.797668,311.096497 254.409073,310.804810 C254.578400,310.177307 254.747726,309.549774 254.982986,309.005432 C254.982986,309.005432 254.897049,308.942932 255.501907,308.751038 C255.531921,308.359406 255.561951,307.967743 255.691864,307.312714 C255.691864,307.312714 255.815140,307.059357 256.440826,306.809204 C256.487762,306.398163 256.534668,305.987122 256.698578,305.312561 C256.698578,305.312561 256.836395,305.059296 257.437378,304.785339 C257.508575,304.379303 257.579742,303.973267 257.739746,303.347626 C257.739746,303.347626 257.841248,303.133575 258.423615,302.803406 C258.483978,302.390930 258.544342,301.978455 258.712708,301.333313 C258.712708,301.333313 258.841309,301.111389 259.465118,300.833008 C259.619690,300.198181 259.774292,299.563354 259.989685,299.001465 C259.989685,299.001465 259.909760,298.950043 260.530457,298.769745 C260.671478,298.159821 260.812500,297.549927 260.994690,296.997284 C260.994690,296.997284 260.928680,296.972382 261.467163,296.817780 C261.576691,296.489075 261.686218,296.160400 261.973846,296.009399 C261.973846,296.009399 261.803925,295.827179 262.540771,295.912842 C262.594788,295.221954 262.648834,294.531067 262.767975,293.841492 C262.767975,293.841492 262.763245,293.776550 263.441498,293.737305 C263.533936,293.092346 263.626404,292.447388 263.851471,291.930908 C263.851471,291.930908 263.760864,291.770020 264.445496,291.750763 C264.531342,291.105743 264.617157,290.460693 264.753876,289.796112 C264.753876,289.796112 264.769104,289.743774 265.405609,289.738617 C265.468384,289.611267 265.599091,289.472473 265.579987,289.358917 C265.538208,289.110413 265.420319,288.874695 265.450104,288.210632 C265.450104,288.210632 265.646545,287.818146 266.351624,287.784546 C266.494019,287.141785 266.636444,286.499054 266.995667,285.948273 C266.995667,285.948273 266.787811,285.836090 267.460968,285.740143 C267.508331,285.101166 267.555695,284.462189 267.670624,283.756104 C267.670624,283.756104 267.732666,283.683868 268.444305,283.711273 C268.875214,282.413147 269.306091,281.115051 269.827118,279.841248 C269.827118,279.841248 269.785065,279.757935 270.429901,279.739929 C270.432617,279.355408 270.435333,278.970886 270.557190,278.268219 C270.557190,278.268219 270.729797,277.975677 271.415131,277.813263 C271.518188,277.147156 271.621246,276.481079 271.806213,275.855469 C271.806213,275.855469 271.783813,275.766876 272.424469,275.746246 C272.427216,275.365875 272.429962,274.985504 272.555237,274.247162 C272.555237,274.247162 272.730957,273.912079 273.383911,273.788177 C273.379364,273.399139 273.374786,273.010101 273.514679,272.249207 C273.514679,272.249207 273.731415,271.914368 274.363220,271.765503 C274.384613,271.377991 274.406006,270.990479 274.566376,270.290771 C274.566376,270.290771 274.742920,269.998169 275.382080,269.777679 C275.553162,269.156128 275.724243,268.534576 275.988800,268.003357 z"
                    />
                  </svg>
                </motion.div>
                <motion.span 
                  className="text-white font-logo font-bold text-xl"
                  style={{
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                  }}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  MovinWare
                </motion.span>
              </a>
            </motion.div>

            {/* Navigation Items - Desktop */}
            <nav className={`hidden lg:flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}>
              {navItems.map((item, index) => (
                <motion.div 
                  key={item.key}
                  className="relative group"
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.button
                    onClick={() => {
                      if (item.hasDropdown) {
                        handleDropdownToggle(item.key)
                      } else {
                        handleNavClick(item.href)
                      }
                    }}
                    className="flex items-center space-x-1 px-4 py-2 rounded-full text-white/90 hover:text-white transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-transparent"
                    style={{
                      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className={`relative z-10 font-medium ${isRTL ? 'ml-1' : 'mr-1'}`}>
                      {t(item.key)}
                    </span>
                    {item.hasDropdown && (
                      <motion.div
                        className="relative z-10"
                        animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.key && (
                        <motion.div
                          className={`absolute top-full mt-2 ${isRTL ? 'right-0' : 'left-0'} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[200px]`}
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.key}
                              className={`w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                              onClick={() => handleNavClick(dropdownItem.href)}
                            >
                              {t(dropdownItem.key)}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Right side - Controls + Mobile Menu */}
            <motion.div 
              className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
              initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {/* Language Selector */}
              <div className="relative">
                <motion.button 
                  className={`flex items-center px-3 py-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-transparent ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                  style={{
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  aria-label={t('nav.changeLanguage')}
                  aria-haspopup="true"
                  aria-expanded={showLanguageMenu}
                >
                  <Globe className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">
                    {locale === 'ar' ? 'العربية' : 'English'}
                  </span>
                  <motion.div
                    animate={{ rotate: showLanguageMenu ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Language Dropdown */}
                <AnimatePresence>
                  {showLanguageMenu && (
                    <motion.div
                      className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[120px]`}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      role="menu"
                      aria-label={t('nav.languageMenu')}
                    >
                      <button
                        className={`w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                        onClick={() => {
                          switchLanguage('ar')
                          setShowLanguageMenu(false)
                        }}
                        role="menuitem"
                      >
                        العربية
                      </button>
                      <button
                        className={`w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}
                        onClick={() => {
                          switchLanguage('en')
                          setShowLanguageMenu(false)
                        }}
                        role="menuitem"
                      >
                        English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <motion.button
                className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                aria-expanded={isMenuOpen}
              >
                <motion.div 
                  className="w-6 h-6 flex flex-col justify-center items-center space-y-1"
                  animate={isMenuOpen ? "open" : "closed"}
                >
                  <motion.div 
                    className="w-5 h-0.5 bg-white rounded-full"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="w-5 h-0.5 bg-white rounded-full"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="w-5 h-0.5 bg-white rounded-full"
                    style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))' }}
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </motion.nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden mt-2 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div 
                className="bg-white/25 dark:bg-gray-900/40 backdrop-blur-xl rounded-2xl"
                style={{
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
                }}
              >
                <motion.div 
                  className="space-y-2 p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {navItems.map((item, index) => (
                    <div key={item.key}>
                      <motion.button 
                        onClick={() => {
                          if (item.hasDropdown) {
                            handleDropdownToggle(item.key)
                          } else {
                            handleNavClick(item.href)
                          }
                        }}
                        className={`w-full px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium focus:outline-none focus:bg-white/10 flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'}`}
                        style={{
                          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                        }}
                        initial={{ x: isRTL ? 20 : -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: isRTL ? -10 : 10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{t(item.key)}</span>
                        {item.hasDropdown && (
                          <motion.div
                            animate={{ rotate: activeDropdown === item.key ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        )}
                      </motion.button>
                      
                      {/* Mobile Dropdown */}
                      {item.hasDropdown && activeDropdown === item.key && (
                        <motion.div
                          className="ml-4 mt-2 space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <button
                              key={dropdownItem.key}
                              className={`w-full px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
                              onClick={() => handleNavClick(dropdownItem.href)}
                            >
                              {t(dropdownItem.key)}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  )
}