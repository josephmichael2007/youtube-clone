import { Stack } from '@mui/material';

const categories = [
  { name: 'New' }, { name: 'Coding' }, { name: 'ReactJS' }, { name: 'NextJS' },
  { name: 'Music' }, { name: 'Education' }, { name: 'Podcast' }, { name: 'Movie' },
  { name: 'Gaming' }, { name: 'Live' }, { name: 'Sport' }, { name: 'Fashion' }
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? '#F31503' : 'transparent',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          margin: '5px',
          borderRadius: '20px',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'all 0.3s ease'
        }}
      >
        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;