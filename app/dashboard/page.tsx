"use client";

import CEOCommandPanel from "../components/live/CEOCommandPanel";
import RevenueAnalytics from "../components/live/RevenueAnalytics";
import AgentHealthMonitor from "../components/live/AgentHealthMonitor";
import EnterpriseNotifications from "../components/live/EnterpriseNotifications";
import ActivityFeed from "../components/live/ActivityFeed";
import EnterpriseControlCenter from "../components/control/EnterpriseControlCenter";
import useDashboard from "../../hooks/useDashboard";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import { useState } from "react";
import MobileHeader from "../components/mobile/MobileHeader";
import MobileSidebar from "../components/mobile/MobileSidebar";
import LogoutButton from "../components/auth/LogoutButton";
import Sidebar from "../components/layout/Sidebar";
import SearchBar from "../components/widgets/SearchBar";
import KpiCard from "../components/cards/KpiCard";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import KnowledgeGraph from "../components/graph/KnowledgeGraph";
import EnterpriseLoop from "../components/enterprise/EnterpriseLoop";
import EnterpriseScheduler from "../components/enterprise/EnterpriseScheduler";
import EnterpriseMonitor from "../components/monitoring/EnterpriseMonitor";
import PredictiveAnalytics from "../components/analytics/PredictiveAnalytics";
import StrategicPlanner from "../components/strategy/StrategicPlanner";
import EnterpriseRegistry from "../components/multienterprise/EnterpriseRegistry";
import PortfolioManager from "../components/multienterprise/PortfolioManager";
import ResourceAllocator from "../components/multienterprise/ResourceAllocator";
import KnowledgeExchange from "../components/multienterprise/KnowledgeExchange";
import MultiEnterpriseDashboard from "../components/multienterprise/MultiEnterpriseDashboard";
import EnterpriseCreator from "../components/multienterprise/EnterpriseCreator";
import StartupIncubator from "../components/multienterprise/StartupIncubator";
import BusinessLauncher from "../components/business/BusinessLauncher";
import EnterpriseOS from "../components/enterprise/EnterpriseOS";
import MarketingEngine from "../components/marketing/MarketingEngine";
import RevenueOptimizer from "../components/revenue/RevenueOptimizer";
import WorkforceManager from "../components/workforce/WorkforceManager";
import DigitalTwin from "../components/digitalTwin/DigitalTwin";

export default function Dashboard() {

const dashboard = useDashboard();
const [menuOpen,setMenuOpen]=useState(false);

return (

<ProtectedRoute>
<>
<EnterpriseLoop />

<MobileHeader
onMenu={()=>setMenuOpen(true)}
/>

<MobileSidebar
open={menuOpen}
close={()=>setMenuOpen(false)}
/>
    <div className="flex min-h-screen bg-black text-white">

<div className="hidden md:block">

<Sidebar />

</div>
      <div className="flex-1 p-8 space-y-8">

        <SearchBar />

<div className="flex justify-end mb-4">

  <LogoutButton />

</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<EnterpriseNotifications />

<WelcomeBanner />

<KpiCard
title="AI Trends"
value={dashboard ? String(dashboard.trends) : "..."}
/>
          <KpiCard
            title="Products"
            value="56"
          />

          <KpiCard
title="Revenue"
value={
dashboard
? "$" + dashboard.revenue
: "..."
}
/>

          <KpiCard
            title="Portfolio"
            value="18"
          />
{dashboard?.updated && (
  <p className="text-sm text-zinc-400 mt-4">
    Last updated: {dashboard.updated}
  </p>
)}

        </div>

<EnterpriseControlCenter />

<EnterpriseScheduler />

<EnterpriseMonitor />

<PredictiveAnalytics />

<StrategicPlanner />

<EnterpriseRegistry />

<PortfolioManager />

<ResourceAllocator />

<KnowledgeExchange />

<MultiEnterpriseDashboard />

<EnterpriseCreator />

<StartupIncubator />

<BusinessLauncher />

<EnterpriseOS />

<MarketingEngine />

<RevenueOptimizer />

<WorkforceManager />

<DigitalTwin />

<ActivityFeed />

<KnowledgeGraph />

<AgentHealthMonitor />

<RevenueAnalytics />

<CEOCommandPanel />


      </div>

    </div>

</>

</ProtectedRoute>
);

}
