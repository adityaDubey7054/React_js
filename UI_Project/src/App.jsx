import React from 'react'
import Page1 from './components/Page1/Page1'
import Page2 from './components/Page2/Page2'
import { color } from 'framer-motion';

function App() {

  const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=687&auto=format&fit=crop",
    intro: "Customers who actively engage with your platform and frequently explore new features or services.",
    color: "#FF5733",
    tag: "Satisfied"
  },
  {
    img: "https://images.unsplash.com/photo-1769069919886-42b327098e41?q=80&w=687&auto=format&fit=crop",
    intro: "Users who tried the product but didn’t find enough value and are less likely to return.",
    color: "#C70039",
    tag: "Not Satisfied"
  },
  {
    img: "https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=735&auto=format&fit=crop",
    intro: "Individuals who are exploring the platform and still deciding whether it fits their needs.",
    color: "#FFC300",
    tag: "Neutral"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    intro: "Potential customers who regularly visit your website and show interest in your offerings.",
    color: "#900C3F",
    tag: "Interested"
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=687&auto=format&fit=crop",
    intro: "People who match your ideal target audience and are more likely to become long-term users.",
    color: "#581845",
    tag: "Potential"
  },
  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=687&auto=format&fit=crop",
    intro: "Users who are exploring multiple solutions before making a final decision.",
    color: "#DAF7A6",
    tag: "Exploring"
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop",
    intro: "Customers who have successfully adopted your product and regularly use its core features.",
    color: "#FF5733",
    tag: "Converted"
  }
];

  return (
    <div className='w-full min-h-screenl'>
     <Page1 users={users}/>
      <Page2/>
    </div>
  )
}

export default App










