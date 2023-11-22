export const properties = [
  {
    id: 1,
    price:"$4,000,000",
    rate:"",
    description:"3-Bedroom Townhouse",
    location:"Northridge Community",
    beds: 8,
    baths: 2,
    size: 1,
    parkingspots: 4,
    image: "/listing-1.jpg",
    type:"FOR SALE",
    category:"Loft",
    city:"Manhattan, NY",
  },
  {
    id: 2,
    price:"$10,000",
    rate:"/mo",
    description:"Charming Studio Apartment",
    location:"West City Corner",
    beds: 4,
    baths: 3,
    size: 450,
    parkingspots: 4,
    image: "/listing-2.jpg",
    type:"FOR RENT",
    category:"House",
    location:"Manhattan, NY",
  },
    {
      id: 3,
      price:"$450,000",
      rate:"",
      description:"Luxury Urban Loft",
      location:"8706 Herrick Ave",
      beds: 4,
      baths: 3,
      size: 450,
      parkingspots: 4,
      image: "/listing-3.jpg",
      type:"FOR SALE",
      category:"House",
      location:"London, UK",
    },
  {
    id: 4,
    price:"$4,000",
    rate:"/mo",
    description:"Elegant Suburban Family Home",
    location:"8706 Herrick Ave",
    beds: 2,
    baths: 1,
    size: 450,
    parkingspots: 4,
    image: "/listing-4.jpg",
    type:"FOR RENT",
    category:"House",
    location:"Miami, FL",
  },
  {
    id: 5,
    price:"$2,000",
    rate:"/mo",
    description:"Cozy Lakeside Cottage",
    location:"8706 Herrick Ave",
    beds: 2,
    baths: 1,
    size: 450,
    parkingspots: 4,
    image: "/listing-5.jpg",
    type:"FOR RENT",
    category:"Apartment",
    city:"Manhattan, NY",
  },
  {
    id: 6,
    price:"$700,000",
    rate:"",
    description:"Sunny 2-Bedroom in Downtown",
    location:"8706 Herrick Ave",
    beds: 4,
    baths: 2,
    size: 1240,
    parkingspots: 1,
    image: "/listing-6.jpg",
    type:"FOR SALE",
    category:"House",
    city:"London, UK",
  },
  
]

export const categories = [
  {
    id:'1',
    title: 'house',
    image: '/icons/house-icon.png'
  },
  {
    id:'2',
    title: 'loft',
    image: '/icons/loft-icon.png'
  },
  {
    id:'3',
    title: 'apartment',
    image: '/icons/apartment-icon.png'
  },
  {
    id:'4',
    title: 'office',
    image: '/icons/office-icon.png'
  },
]

export const searchFilters = [
  {
    id: 1,
    type: 'Location',
    subTypes: [
      'Manhattan, NY', 
      'London, UK', 
      'Miami, FL', 
    ]
  },
  {
    id: 2,
    type: 'Category',
    subTypes: [
      'House', 
      'loft', 
      'apartment',
      'office' 
    ]
  },
  {
    id: 3,
    type: 'Type',
    subTypes: [
      'for sale', 
      'for rent',
    ]
  },
  
]

export const propertiesHero = {
  title: 'Browse all properties',
  description: 'Discover more than 1,000+ property showcases.',
  image: 'categories',
  children: '',
  summaryText: "Explore all Properties"
}