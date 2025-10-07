import {Breadcrump, Contact, Container} from "../../index";
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
export default function AllCourses() {
    return (
        <>
          <div className="generic-padding" style={{ paddingTop: 20, marginBottom: 60 }}>
            <div className="container mobile-view">
              <div
                className="tutor-course-filter-wrap row align-items-center"
                style={{ marginBottom: 20 }}
              >
                <div className="tutor-course-archive-results-wrap col">
                  {/*               <strong>22</strong> Courses */}
                </div>
                <div className="tutor-course-archive-filters-wrap col-auto">
                  <form className="tutor-course-filter-form" method="get">
                    <div className="selection-box">
                      <select name="tutor_course_filter" className="small">
                        <option selected="">Select Order</option>
                        <option value="newest_first">Release Date (newest first)</option>
                        <option value="oldest_first">Release Date (oldest first)</option>
                        <option value="course_title_az">Course Title (a-z)</option>
                        <option value="course_title_za">Course Title (z-a)</option>
                      </select>
                    </div>
                  </form>
                  
                </div>
              </div>
              <div className="container">
                <div className="filter row">
                  <nav className="navbar navbar-expand-lg navbar-light mobile-hide">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      style={{ marginTop: "-10px", marginLeft: "-15px" }}
                    >
                      <i aria-hidden="true" className="fas fa-filter" />
                    </button>
                  </nav>
                  <input id="all" type="checkbox" />
                  <input id="Upcoming" type="checkbox" />
                  <input id="Ongoing" type="checkbox" />
                  <input id="Past" type="checkbox" />
                  <input id="Arts" type="checkbox" />
                  <input id="Bhakti" type="checkbox" />
                  <input id="Philosophy" type="checkbox" />
                  <input id="Yoga" type="checkbox" />
                  <input id="Life" type="checkbox" />
                  <input id="English" type="checkbox" />
                  <input id="Hindi" type="checkbox" />
                  <input id="Free" type="checkbox" />
                  <input id="Paid" type="checkbox" />
                  <input id="Zoom" type="checkbox" />
                  <input id="Basic" type="checkbox" />
                  <input id="Intermediate" type="checkbox" />
                  <input id="Advance" type="checkbox" />
                  <input id="Pro" type="checkbox" />
                  <input id="Youtube" type="checkbox" />
                  <input id="Self" type="checkbox" />
                  <div className="filter__control col-lg-4 hide-me">
                    <h4 style={{ borderBottom: "2px solid #ffcd28", paddingBottom: 5 }}>
                      Status
                    </h4>
                    <label className="filter__button" htmlFor="all">
                      All
                    </label>
                    <label className="filter__button" htmlFor="Upcoming">
                      Upcoming Courses
                    </label>
                    <label className="filter__button" htmlFor="Ongoing">
                      Ongoing Courses
                    </label>
                    <label className="filter__button" htmlFor="Past">
                      Past Courses
                    </label>
                    <label className="filter__button" htmlFor="Self">
                      Self-paced
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Course Categories
                    </h4>
                    <label className="filter__button" htmlFor="Arts">
                      Art &amp; Skills
                    </label>
                    <label className="filter__button" htmlFor="Bhakti">
                      Bhakti
                    </label>
                    <label className="filter__button" htmlFor="Philosophy">
                      Philosophy
                    </label>
                    <label className="filter__button" htmlFor="Yoga">
                      Yoga
                    </label>
                    <label className="filter__button" htmlFor="Life">
                      Life &amp; Relationships
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Level
                    </h4>
                    <label className="filter__button" htmlFor="Basic">
                      1 | Basic
                    </label>
                    <label className="filter__button" htmlFor="Intermediate">
                      2 | Intermediate
                    </label>
                    <label className="filter__button" htmlFor="Advance">
                      3 | Advance
                    </label>
                    <label className="filter__button" htmlFor="Pro">
                      4 | Pro
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Language
                    </h4>
                    <label className="filter__button" htmlFor="English">
                      English
                    </label>
                    <label className="filter__button" htmlFor="Hindi">
                      Hindi
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Cost
                    </h4>
                    <label className="filter__button" htmlFor="Paid">
                      Paid
                    </label>
                    <label className="filter__button" htmlFor="Free">
                      Free
                    </label>
                    <h4
                      style={{
                        borderBottom: "2px solid #ffcd28",
                        padding: "10px 0 5px 0"
                      }}
                    >
                      Medium
                    </h4>
                    <label className="filter__button" htmlFor="Zoom">
                      Zoom
                    </label>
                    <label className="filter__button" htmlFor="Youtube">
                      Youtube
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="filter__content ">
            <div className="filter__list">
              <div className="">
                      <Card
                              sx={{
                                width: 330,
                                borderRadius: 4,
                                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                                overflow: "hidden",
                                padding : "10px",
                                margin : "10px"
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
              </div>
              
            </div>
            </div>
          </div>

    </>
    )
}