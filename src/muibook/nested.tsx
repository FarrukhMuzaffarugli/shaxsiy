import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Checkbox from "@mui/material/Checkbox";
import { TBiodori } from "../mock/Tdorilar";
import Slider, { SliderProps } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import { Shoopdivleft3, Shoopdivleft4 } from "../components/stylecomponent";

type NestedListProps = {
  uzatishClassify: (selectedClassify: string[]) => void;
};
 
type NestedList1Props = {
  uzatishCategorie: (selectedCategorie: string[]) => void;
};

type RatingFilterProps = {
  uzatishRatings: (selectedRatings: number[]) => void;
};

export function NestedList({ uzatishClassify}: NestedListProps) {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => setOpen(!open);
    const [checkedClassify, setcheckedClassify] = React.useState<string[]>([]);
  
    const allClassifications = TBiodori.map((item) => item.classify);
    const uniqueClassifications = [...new Set(allClassifications)];
  
    const [showAll, setShowAll] = React.useState(false);
    const displayedItems = showAll
      ? uniqueClassifications
      : uniqueClassifications.slice(0, 6);
  
      const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
      
        setcheckedClassify((prev) => {
          if (!value) return prev; 
          return checked
            ? prev.includes(value) ? prev : [...prev, value]
            : prev.filter((item) => item !== value);
        });
      };
      
    



      const stableUzatishClassify = React.useCallback(uzatishClassify, []);

      React.useEffect(() => {
        stableUzatishClassify(checkedClassify);
      }, [checkedClassify, stableUzatishClassify]);
      
      

    return (
      <List disablePadding sx={{ width: "100%", maxWidth: 300 }} component="nav">

        <ListItemButton onClick={handleClick} disableGutters sx={{ pl: 0 }}>
          <ListItemText
            primary="Categories"
            primaryTypographyProps={{
              style: {
                color: "var(--Secondary-80, #405A80)",
                fontFamily: "Jost",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0.03px",
                textTransform: "capitalize",
              },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
  
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {displayedItems.map((classifyItem, index) => {
             
             const count = TBiodori.filter(
                (dori) => dori.classify === classifyItem
              ).length;
              
              const formattedCount = count < 10 ? `0${count}` : String(count);
  
              return (
                <ListItemButton
                  key={index}
                  disableGutters
                  sx={{
                    pl: 0,
                    mb: "15px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                   value={classifyItem}
                   onChange={handleCheckbox}
                   checked={checkedClassify.includes(classifyItem ?? "")}
                    sx={{
                      p: 0,
                      width: "20px",
                      height: "20px",
                      mr: 1,
                    }}
                  />
                  <ListItemText
                    disableTypography
                    primary={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%", 
                        }}
                      >
                        <span
                          style={{
                            color: "var(--Gray-Scale-70, #454545)",
                            fontFamily: "Jost",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "24px",
                            letterSpacing: "0.08px",
                            textTransform: "capitalize",
                          }}
                        >
                          {classifyItem}
                        </span>
  
                        <span
                          style={{
                            color: "var(--Gray-Scale-50, #727272)",
                            fontFamily: "Jost",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "0.08px",
                          }}
                        >
                          ({formattedCount})
                        </span>

                      </div>
                    }
                  />
                </ListItemButton>
              );
            })}
          </List>
  
          {uniqueClassifications.length > 6 && (
            <p
            style={{
                color: "var(--Secondary-50, #80B4FF)",
                fontFamily: "Jost",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px", // 142.857%
                letterSpacing: "0.035px",
                margin: 0,
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show less" : "Show 6 more"}
            </p>
          )}
        </Collapse>
      </List>
    );
  }


  export function NestedList1({ onPriceChange }: { onPriceChange: (range: [number, number]) => void }) {
    const [open, setOpen] = React.useState(true);
    const [priceRange, setPriceRange] = React.useState<[number, number]>([1, 2000]);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    const handleChange: SliderProps["onChange"] = (_event, newValue) => {
      const newRange = newValue as [number, number];
      setPriceRange(newRange); 
      onPriceChange(newRange); 
    };
    
    return (
      <List sx={{ width: "100%" }} component="nav">
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary="Price"
            primaryTypographyProps={{
              style: {
                color: "var(--Secondary-80, #405A80)",
                fontFamily: "Jost",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0.03px",
                textTransform: "capitalize",
              },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
  
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div style={{ padding: "0 16px 16px" }}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "var(--Gray-Scale-50, #727272)",
                  fontFamily: "Jost",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "20px",
                  letterSpacing: "0.035px",
                  mb: 1,
                }}
              >
                <span
                  style={{
                    backgroundColor: "white",
                    width: "auto",
                    height: "28px",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 20px",
                    borderRadius: "10px",
                  }}
                >
                  ${priceRange[0]}
                </span>
  
                <span
                  style={{
                    backgroundColor: "white",
                    width: "auto",
                    height: "28px",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 20px",
                    borderRadius: "10px",
                  }}
                >
                  ${priceRange[1]}
                </span>
              </Typography>
  
              <Slider
                value={priceRange}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={1}
                max={2000}
              />
            </div>
          </List>
        </Collapse>
      </List>
    );
  }
  


  export function NestedList3({uzatishCategorie} : NestedList1Props) {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => setOpen(!open);
  
    const allCategories = TBiodori.map((item) => item.category);
    const uniqueCategories = [...new Set(allCategories)];

    const [checkedCategorie, setcheckedCategorie] = React.useState<string[]>([]);

    const [showAll, setShowAll] = React.useState(false);
    const displayedItems = showAll
      ? uniqueCategories
      : uniqueCategories.slice(0, 6);

      const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setcheckedCategorie((prev) =>
          checked ? [...prev, value] : prev.filter((item) => item !== value)
        );
      };

      React.useEffect(() => {
        uzatishCategorie(checkedCategorie);
      }, [checkedCategorie, uzatishCategorie]);
  
    return (
      <List disablePadding sx={{ width: "100%", maxWidth: 300 }} component="nav">
        <ListItemButton onClick={handleClick} disableGutters sx={{ pl: 0 }}>
          <ListItemText
            primary="Classify"
            primaryTypographyProps={{
              style: {
                color: "var(--Secondary-80, #405A80)",
                fontFamily: "Jost",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0.03px",
                textTransform: "capitalize",
              },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
  
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {displayedItems.map((categoryItem, index) => {
              const count = TBiodori.filter(
                (dori) => dori.category === categoryItem
              ).length;
              const formattedCount = count < 10 ? `0${count}` : String(count);
  
              return (
                <ListItemButton
                  key={index}
                  disableGutters
                  sx={{
                    pl: 0,
                    mb: "15px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                   value={categoryItem} 
                   onChange={handleCheckbox}
                   checked={checkedCategorie.includes(categoryItem)} 
                    sx={{
                      p: 0,
                      width: "20px",
                      height: "20px",
                      mr: 1,
                    }}
                  />
                  <ListItemText
                    disableTypography
                    primary={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--Gray-Scale-70, #454545)",
                            fontFamily: "Jost",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "24px",
                            letterSpacing: "0.08px",
                            textTransform: "capitalize",
                          }}
                        >
                          {categoryItem}
                        </span>
  
                        <span
                          style={{
                            color: "var(--Gray-Scale-50, #727272)",
                            fontFamily: "Jost",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "24px",
                            letterSpacing: "0.08px",
                          }}
                        >
                          ({formattedCount})
                        </span>
                      </div>
                    }
                  />
                </ListItemButton>
              );
            })}
          </List>
  
          {uniqueCategories.length > 6 && (
            <p
            style={{
                color: "var(--Secondary-50, #80B4FF)",
                fontFamily: "Jost",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "20px", // 142.857%
                letterSpacing: "0.035px",
                margin: 0,
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Show less" : "Show 6 more"}
            </p>
          )}
        </Collapse>
      </List>
    );
  }
 
  export function RatingFilter({uzatishRatings} : RatingFilterProps) {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => setOpen(!open);
  
    const ratingLevels = [1, 2, 3, 4, 5];
    const [selectedRatings, setSelectedRatings] = React.useState<number[]>([]);
  
    const handleRatingChange = (rating: number) => {
      setSelectedRatings((prev) =>
        prev.includes(rating)
          ? prev.filter((r) => r !== rating)
          : [...prev, rating]
      );
    };

    React.useEffect(() => {
      uzatishRatings(selectedRatings);
    }, [selectedRatings, uzatishRatings]);
  
    return (
      <List disablePadding sx={{ width: "100%",  }} component="nav">
        <ListItemButton onClick={handleClick} disableGutters sx={{ pl: 0 }}>
          <ListItemText
            primary="Rating"
            primaryTypographyProps={{
              style: {
                color: "var(--Secondary-80, #405A80)",
                fontFamily: "Jost",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0.03px",
                textTransform: "capitalize",
              },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
  
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {ratingLevels.map((rating) => {
              return (
                <ListItemButton
                  key={rating}
                  disableGutters
                  sx={{
                    pl: 0,
                    mb: "15px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    checked={selectedRatings.includes(rating)}
                    onChange={() => handleRatingChange(rating)}
                    sx={{
                      p: 0,
                      width: "20px",
                      height: "20px",
                      mr: 1,
                    }}
                  />
                  <ListItemText
                    disableTypography
                    primary={
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Rating
                          value={rating}
                          readOnly
                          sx={{
                            "& .MuiRating-icon": {
                              fontSize: "20px", 
                              color: "#FFD700", 
                            },
                          }}
                        />
                      </div>
                    }
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </List>
    );
  }
  
  export function NestedList4() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    const latestItems = TBiodori.sort(
      (a, b) => b.dateAdded.getTime() - a.dateAdded.getTime()
    ).slice(0, 3);
  
    return (
      <List disablePadding sx={{ width: "100%" }} component="nav">
        <ListItemButton onClick={handleClick}>
          <ListItemText
            primary="Inbox"
            primaryTypographyProps={{
              style: {
                color: "var(--Secondary-80, #405A80)",
                fontFamily: "Jost",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "0.03px",
                textTransform: "capitalize",
              },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {latestItems.map((item) => (
              <ListItemButton sx={{ pl: 0 }} key={item.id}>
                <Shoopdivleft3>
                  <img src={item.image} alt="rasm" />
                  <Shoopdivleft4>
                    <h1>{item.name}</h1>
                    <p>
  {item.discountedPrice && item.discountedPrice !== item.originalPrice ? (
    <>
      <span
        style={{
         
          marginRight: "8px",
        }}
      >
        ${item.discountedPrice.toFixed(2)}
      </span>
      <span
  style={{
    textDecoration: "line-through", 
    color: "var(--Gray-Scale-40, #898989)", 
    fontFamily: "Jost",
    fontSize: "16px", 
    fontStyle: "normal", 
    fontWeight: 400, 
    lineHeight: "24px", 
    letterSpacing: "0.08px", 
  }}
>
        ${item.originalPrice.toFixed(2)}
      </span>
    </>
  ) : (
    <span>${item.originalPrice.toFixed(2)}</span>
  )}
</p>

                  </Shoopdivleft4>
                </Shoopdivleft3>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    );
  }
