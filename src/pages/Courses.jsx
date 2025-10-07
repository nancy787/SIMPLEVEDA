import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Stack,
  Chip
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LanguageIcon from "@mui/icons-material/Language";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Courses() {

  
  const courses = [
  {
    title: "Yoga Sadhana Beginner",
    image: "https://simplevedas.com/wp-content/uploads/2021/08/Gods-Plan-960x640.jpg",
    date: "1st Sep",
    duration: "21 days",
    language: "Multiple",
    description: "Learn yoga philosophy, asanas and meditations to take charge of your joy!",
    price: 590,
  },
  {
    title: "Advanced Yoga Techniques",
    image: "https://simplevedas.com/wp-content/uploads/2021/08/Gods-Plan-960x640.jpg",
    date: "10th Sep",
    duration: "30 days",
    language: "Multiple",
    description: "Deep dive into yoga techniques for mind & body balance.",
    price: 990,
  },
    {
    title: "Advanced Yoga Techniques",
    image: "https://simplevedas.com/wp-content/uploads/2021/08/Gods-Plan-960x640.jpg",
    date: "10th Sep",
    duration: "30 days",
    language: "Multiple",
    description: "Deep dive into yoga techniques for mind & body balance.",
    price: 990,
  },
];


    return(
      <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div
                  id="1678091909241-98bd706c-a7f8"
                  className="dt-sc-empty-space"
                />
                <div className="dt-sc-title script-with-sub-title dt-sc-title script-with-sub-title dt-sc-kalvi-default-title">
                  <h2>
                    Our <strong>Courses</strong>
                  </h2>
                  <h6>Learn as never before</h6>
                </div>
                <div
                  id="1528802127029-9384692e-0e52"
                  className="dt-sc-empty-space"
                />
                <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                {courses.map((course, index) => (
                  <Card
                      sx={{
                        width: 330,
                        borderRadius: 4,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        overflow: "hidden",
                      }}
                    >
                      {/* Image */}
                      <CardMedia
                        component="img"
                        height="180"
                        image="https://simplevedas.com/wp-content/uploads/2021/08/Gods-Plan-960x640.jpg" // replace with your own image
                        alt="Yoga Sadhana Beginner"
                      />
                
                      <CardContent sx={{ p: 2 }}>
                        {/* Title */}
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          color="text.primary"
                          sx={{ mb: 1 }}
                        >
                          Yoga Sadhana Beginner
                        </Typography>
                
                        {/* Info row */}
                        <Stack direction="row" spacing={1.5} alignItems="center" mb={1.5}>
                          <Chip
                            icon={<CalendarMonthIcon />}
                            label="1st Sep"
                            size="small"
                            sx={{ background: "#f5f5f5" }}
                          />
                          <Chip
                            icon={<AccessTimeIcon />}
                            label="21 days"
                            size="small"
                            sx={{ background: "#f5f5f5" }}
                          />
                          <Chip
                            icon={<LanguageIcon />}
                            label="Multiple"
                            size="small"
                            sx={{ background: "#f5f5f5" }}
                          />
                        </Stack>
                
                        {/* Description */}
                        <Typography variant="body2" color="text.secondary" mb={2}>
                          Learn yoga philosophy, asanas and meditations to take charge of your
                          joy!
                        </Typography>
                
                        {/* Buttons */}
                        <Stack direction="row" spacing={1.5}>
                          <Button
                            variant="outlined"
                            sx={{
                              textTransform: "none",
                              borderRadius: 2,
                              flex: 1,
                              fontWeight: 500,
                            }}
                          >
                            View Details
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              borderRadius: 2,
                              flex: 1,
                              backgroundColor: "#296e64",
                              "&:hover": { backgroundColor: "#1f5a52" },
                            }}
                          >
                            Register Now ₹590
                          </Button>
                        </Stack>
                      </CardContent>
                  </Card>
                ))}
              </div>
                <div
                  id="1528802127264-94493132-bfaf"
                  className="dt-sc-empty-space"
                />
                   <div
                  id="1528802127264-94493132-bfaf"
                  className="dt-sc-empty-space"
                />
                   <div
                  id="1528802127264-94493132-bfaf"
                  className="dt-sc-empty-space"
                />
              </div>
            </div>
          </div>
    )
}