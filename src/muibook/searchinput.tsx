import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'; 
import { blogdata } from '../mock/blog';

// 🔵 Interfeys
interface FilmOptionType {
  inputValue?: string;
  title: string;
  id: string;   
  year?: number;
}

const filter = createFilterOptions<FilmOptionType>();


const top100Films: FilmOptionType[] = blogdata.map((item) => ({
  title: item.title,
  id: item.id, 
}));

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);
  const navigate = useNavigate(); 

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => {
        if (typeof newValue === 'string') {
          setValue({ title: newValue, id: '' });
        } else if (newValue && newValue.inputValue) {
          setValue({ title: newValue.inputValue, id: '' });
        } else {
          setValue(newValue);

          
          if (newValue && newValue.id) {
            navigate(`/blog/${newValue.id}`);
          }
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;

        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
            id: '', 
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) => (
        <li {...props}>{option.title}</li>
      )}
      sx={{
        width: 460,
        height: 56,
        borderRadius: 48,
        backgroundColor: '#80B4FF',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#FFFFFF',
          },
          '&:hover fieldset': {
            borderColor: '#FFFFFF',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FFFFFF',
          },
        },
      }}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search..."
          InputLabelProps={{
            style: {
              color: '#FFFFFF',
              fontFamily: 'Urbanist',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '20px',
              letterSpacing: '1.25px',
            },
          }}
          inputProps={{
            ...params.inputProps,
            style: { color: '#FFFFFF' },
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon style={{ color: '#FFFFFF' }} />
              </InputAdornment>
            ),
            sx: {
              '& input::placeholder': {
                color: '#FFFFFF',
                opacity: 1,
              },
            },
          }}
        />
      )}
    />
  );
}




  
