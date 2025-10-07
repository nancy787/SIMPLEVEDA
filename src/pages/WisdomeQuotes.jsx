import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';
import embaraceQuote from "../assets/images/embrace.jpg"
import faithQuote from "../assets/images/faith.png";
import relationshipQuote from "../assets/images/relationships.jpg";
import weaknessesQuote from "../assets/images/weekness.jpg";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export default function WisdomeQuotes() {
    const YellowColor = '#ffc13c';
  const BackgroundColor = '#f1f5f8'; // Light gray background
  const DarkTextColor = '#374151'; // Equivalent to gray-800

  const quotes = [
  {
    image: faithQuote,
    text: 'Faith, Faith, Faith...This one word covers the entire spiritual journey.',
    source: '(Based on Bhagavad Gita 9.3) - Madhusudana Visnu Das',
  },
  {
    image: embaraceQuote,
    text: 'If you really want to ask something from GOD, why ask for petty things of this world- WEALTH, POWER, BEAUTY, FAME and so on? Ask for something GREAT. Ask for a MEETING with the LORD. Ask for REUNION with Him. Ask for His EMBRACE.',
    source: '',
  },
  {
    image: weaknessesQuote,
    text: 'When our weaknesses get stronger than us, we need to cling for support to those who are Mentally and Spiritually stronger.',
    source: '- Madhusudana Visnu Das',
  },
  {
    image: relationshipQuote,
    text: 'Genuine Relationships are supported by the Pillars of Responsibility, not Recreation.',
    source: 'Based on Bhagavad-gita 18.38',
  },
];

    return (
      <div
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      className="vc_row wpb_row vc_row-fluid vc_custom_1678093325981 vc_row-has-fill vc_column-gap-30 ult-vc-hide-row uvc_hidden-xs uvc_hidden-xsl"
      style={{
        position: "relative",
        left: "-76.5px",
        boxSizing: "border-box",
        width: 1293,
        maxWidth: 1293,
        paddingLeft: "76.5px",
        paddingRight: "76.5px"
      }}
      data-hide-row=" uvc_hidden-xs  uvc_hidden-xsl "
      data-rtl="false"
      data-row-effect-mobile-disable="true"
    >
  <div
    className="upb_row_bg"
    data-bg-override={0}
    style={{ minWidth: 1293, left: 0, width: 1292 }}
  />
  <div className="wpb_column vc_column_container vc_col-sm-12">
    <div className="vc_column-inner " style={{ textAlign: "center" }}>
      <div className="wpb_wrapper">
        <div id="1647080109041-ec08e9b3-cf16" className="dt-sc-empty-space" />
        <div className="dt-sc-title script-with-sub-title dt-sc-title script-with-sub-title dt-sc-kalvi-default-title">
          <h2>
            Wisdom <strong> Quotes </strong>
          </h2>
          <h6 />
        </div>
     
        
          <Box
      component="section"
      sx={{
        backgroundColor: BackgroundColor,
        py: { xs: 8, md: 10 }, // Responsive vertical padding
        px: { xs: 2, sm: 4, md: 6 }, // Responsive horizontal padding
        position: 'relative',
      }}
    >
      <Box sx={{ maxWidth: 'lg', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            mb: { xs: 4, sm: 6 },
            gap: 1, // Space between title and decorative lines
          }}
        >
          <Box
            sx={{
              width: { xs: 40, sm: 48 },
              height: 3,
              backgroundColor: YellowColor,
              display: { xs: 'none', sm: 'block' },
            }}
          />
        </Box>

        <Grid container spacing={4}>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[0].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[1].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[2].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
          <Grid size={3}>
            <Card
            elevation={4}
            sx={{
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              cursor: 'pointer',
              transition: 'transform 300ms ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
        >
          <CardMedia
            component="img"
            image={quotes[0].image}
            alt="Quote 1"
            sx={{ height: { xs: 224, sm: 256, md: 288, lg: 320 }, objectFit: 'cover' }}
          />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
        <div id="1647080143087-aec31d62-4b85" className="dt-sc-empty-space" />
      </div>
    </div>
  </div>
      </div>

    )
}