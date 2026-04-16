import { useState } from 'react';
import { 
  Globe, 
  Brain, 
  Eye, 
  Server, 
  FileCheck, 
  AlertTriangle,
  Shield,
  Activity,
  Radio,
  Container,
  Layers,
  Grid3x3,
  Zap,
  Database
} from 'lucide-react';
import { GlobalOverwatch } from './components/GlobalOverwatch';
import { AIRuleGen } from './components/AIRuleGen';
import { LiveSentinel } from './components/LiveSentinel';
import { FleetOS } from './components/FleetOS';
import { ERPSanction } from './components/ERPSanction';

type Page = 'overwatch' | 'rulegen' | 'sentinel' | 'fleetos' | 'erp';

export default function App() {
  const [activeTab, setActiveTab] = useState<Page>('overwatch');
  const [isCritical, setIsCritical] = useState(false);

  const navigationItems = [
    { id: 'overwatch' as Page, icon: Globe, label: '1. Global Overwatch' },
    { id: 'rulegen' as Page, icon: Brain, label: '2. AI Rule-Gen' },
    { id: 'sentinel' as Page, icon: Eye, label: '3. Live Sentinel' },
    { id: 'fleetos' as Page, icon: Server, label: '4. FleetOS Admin' },
    { id: 'erp' as Page, icon: FileCheck, label: '5. ERP Sanction & CAPA' },
  ];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      isCritical ? 'bg-gradient-to-br from-[#0B0F19] via-[#1a0a0a] to-[#2a0505]' : 'bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#0B0F19]'
    }`}>
      {/* Top Header */}
      <header className={`h-20 border-b backdrop-blur-xl transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/30 border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.3)]' 
          : 'bg-slate-900/30 border-slate-700/50'
      }`}>
        <div className="h-full px-6 flex items-center justify-between">
          {/* Left: Branding */}
          <div className="flex items-center gap-4">
            <Shield className={`w-10 h-10 ${isCritical ? 'text-red-500' : 'text-cyan-400'}`} />
            <div>
              <h1 className={`text-3xl font-black tracking-tight transition-colors duration-500 ${
                isCritical 
                  ? 'text-red-400 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)]' 
                  : 'text-cyan-400 drop-shadow-[0_0_20px_rgba(0,212,255,0.8)]'
              }`}>
                COMPLIA Command Center
              </h1>
              <p className="text-xs text-slate-400 tracking-wider">Mission-Critical RegTech & DeepTech Platform</p>
            </div>
          </div>

          {/* Right: Operator Profile & Critical Toggle */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-300">Operator: Alex Mercer</p>
              <p className="text-xs text-slate-500">APAC Region</p>
            </div>
            
            <button
              onClick={() => setIsCritical(!isCritical)}
              className={`px-6 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-300 border-2 ${
                isCritical
                  ? 'bg-red-600 border-red-400 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:bg-red-700 animate-pulse'
                  : 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700'
              }`}
            >
              {isCritical ? (
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  CRITICAL INCIDENT STATE
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  NORMAL STATE
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar Navigation */}
        <aside className={`w-80 border-r backdrop-blur-xl transition-all duration-500 ${
          isCritical 
            ? 'bg-slate-950/50 border-red-500/30' 
            : 'bg-slate-900/50 border-slate-700/50'
        }`}>
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full px-5 py-4 rounded-lg flex items-center gap-4 transition-all duration-300 text-left ${
                    isActive
                      ? isCritical
                        ? 'bg-red-600/30 border-2 border-red-500 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                        : 'bg-cyan-600/30 border-2 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                      : isCritical
                        ? 'bg-slate-800/30 border-2 border-transparent text-slate-400 hover:bg-red-900/20 hover:border-red-800'
                        : 'bg-slate-800/30 border-2 border-transparent text-slate-400 hover:bg-slate-700/50 hover:border-slate-600'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="font-semibold text-sm">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Footer Stats */}
          <div className="absolute bottom-24 left-4 right-4 space-y-3">
            <div className={`p-4 rounded-lg backdrop-blur-md border ${
              isCritical 
                ? 'bg-red-950/40 border-red-500/30' 
                : 'bg-slate-800/40 border-slate-600/30'
            }`}>
              <p className="text-xs text-slate-400 mb-2">System Status</p>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">API Gateway</span>
                  <span className={isCritical ? 'text-red-400' : 'text-green-400'}>
                    {isCritical ? 'HIGH ALERT' : 'SECURE'}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Uptime</span>
                  <span className="text-cyan-400">99.98%</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8 min-h-full">
            {activeTab === 'overwatch' && <GlobalOverwatch isCritical={isCritical} />}
            {activeTab === 'rulegen' && <AIRuleGen isCritical={isCritical} />}
            {activeTab === 'sentinel' && <LiveSentinel isCritical={isCritical} />}
            {activeTab === 'fleetos' && <FleetOS isCritical={isCritical} />}
            {activeTab === 'erp' && <ERPSanction isCritical={isCritical} />}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className={`h-16 border-t backdrop-blur-xl transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/30 border-red-500/30' 
          : 'bg-slate-900/30 border-slate-700/50'
      }`}>
        <div className="h-full px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className={`w-5 h-5 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
            <span className="text-sm font-bold text-slate-300">Powered by Britannia Inc.</span>
          </div>
          <div className="flex items-center gap-3">
            <Database className={`w-5 h-5 ${isCritical ? 'text-red-400' : 'text-green-400'}`} />
            <span className="text-sm text-slate-400">Global API Gateway: <span className={isCritical ? 'text-red-400 font-bold' : 'text-green-400 font-bold'}>SECURE</span></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
