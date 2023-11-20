import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: " ",
  description: "openrouteservice backend documentation",
  base: "/openrouteservice/",
  themeConfig: {
	logo: {
			src: 'assets/images/openrouteservice.png',
			alt: 'openrouteservice logo',
	},
	search: {
			provider: 'local'
	},
    nav: [
      { text: 'Homepage', link: 'https://openrouteservice.org' },
      { text: 'Forum', link: 'https://ask.openrouteservice.org' },
      { text: 'API Playground', link: 'https://openrouteservice.org/dev/#/api-docs' },
    ],

    sidebar: [
	    {
			text: 'Home', link: '/',
		    items: [
			    { text: 'Installation and Usage', link: 'installation/Installation-and-Usage' }
		    ]
	    }
    ],
//        Running with Docker
//        Building from Source
//        System Requirements
//        Configuration
//        Advanced Docker Setup
//    Data
//    Contributing
//        Contributing Translations
//    Documentation
//        Tag Filtering
//        Travel Speeds
//            Waytype Speeds
//            Surface Speeds
//            Tracktype Speeds
//            Country Speeds
//        Route Attributes
//        Routing Options
//            Examples
//            Country List
//        Instruction Types
//        Extra Info
//            Steepness
//            Surface
//            Waycategory
//            Waytype
//            Trail Difficulty
//            Road Access Restrictions
//        Geometry Decoding
//        Structured Geocoding Query
//        Matrix Response
//        Places Request and Response
//        Geocoding Response
//        Error Codes
//    FAQ

    socialLinks: [
      // TODO: change link
      { icon: 'github', link: 'https://github.com/koebi/openrouteservice' }
    ],

    footer: {
      message: '<a href="https://openrouteservice.org/">openrouteservice</a> is part of <a href="https://heigit.org/">HeiGIT gGmbH</a> and Universität Heidelberg <a href="https://www.geog.uni-heidelberg.de/gis/index_en.html">GIScience</a> research group. | <a href="https://heigit.org/imprint/">Imprint</a>'
    }
  }
})
