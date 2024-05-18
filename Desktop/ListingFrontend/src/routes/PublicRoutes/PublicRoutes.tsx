import { Routes, Route } from 'react-router-dom';
import Layout from '../../layout/Layout/Layout';
import ReportToWosom from '../../components/features/forms/ReportToWosom/ReportToWosom';
import InternationalHome from '../../components/pages/InternationalHome/InternationalHome';
import SectorPage from '../../components/pages/SectorPage/SectorPage';
import EventsPage from '../../components/pages/IndustryPage/EventsPage/EventsPage';
import WeddingVenue from '../../components/pages/WeddingVenue/WeddingVenueComponent';
import VenueLoggedIN from '../../components/pages/WeddingVenueLoggedIn/WeddingVenueLoggedIn';
import Footer1 from '../../layout/Footer/Footer';
import FooterMain from '../../components/footer/Footer';

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout content={InternationalHome} footer={Footer1} />} />
            <Route path="/report-to-wosom" element={<Layout content={ReportToWosom} footer={Footer1} />} />
            <Route path="/sector" element={<Layout content={SectorPage} footer={Footer1} />} />
            <Route path="/events" element={<Layout content={EventsPage} footer={FooterMain} />} />
            <Route path="/venue" element={<Layout content={WeddingVenue} footer={FooterMain} />} />
            <Route path="/venue-loggedin" element={<Layout content={VenueLoggedIN} footer={FooterMain} />} />
        </Routes>
    );
}

export default PublicRoutes;
