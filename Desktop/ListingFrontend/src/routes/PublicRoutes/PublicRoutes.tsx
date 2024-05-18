import { Routes, Route } from 'react-router-dom';
import Layout from '../../layout/Layout/Layout';
import ReportToWosom from '../../components/features/forms/ReportToWosom/ReportToWosom';
import InternationalHome from '../../components/pages/InternationalHome/InternationalHome';
import SectorPage from '../../components/pages/SectorPage/SectorPage';
import EventsPage from '../../components/pages/IndustryPage/EventsPage/EventsPage';
import WeddingVenue from '../../components/pages/WeddingVenue/WeddingVenueComponent';


function PublicRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout content={InternationalHome} />} /> {/* Layout for root path */}
            <Route path="/report-to-wosom" element={<Layout content={ReportToWosom} />} /> {/* Layout for root path */}
            <Route path="/sector" element={<Layout content={SectorPage} />} /> {/* Layout for root path */}
            <Route path="/events" element={<Layout content={EventsPage} />} /> 
            <Route path="/venue" element={<Layout content={WeddingVenue} />} /> 
        </Routes>
    )
}

export default PublicRoutes