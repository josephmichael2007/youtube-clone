import { useState } from 'react';
import { Stack, Paper, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between', zIndex: 100 }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>
        <span style={{ color: '#F31503', fontSize: '2rem', marginRight: '5px' }}>●</span> YouTube
      </Link>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ borderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: { sm: 5 }, display: 'flex', alignItems: 'center' }}
      >
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ border: 'none', outline: 'none', width: '250px', padding: '6px 0' }}
        />
        <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Navbar;