




function App() {
  const [posts,setPosts] = useState([])
  useEffect(()=> {fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => setPosts(posts))},[])
  

  return (
    <div className="App">
      <h1 className='bg-primary text-white m-0'>Fetch API Data</h1>
    
        {posts.map((post)=>  <div key={post.id}>
          <h1 className='bg-secondary text-white m-0'>{post.title}</h1>
          <p className='bg-info text-white m-0'>{post.body}</p>
          </div>) }
        

      
      
      
     
    </div>
  );
}

export default App;
