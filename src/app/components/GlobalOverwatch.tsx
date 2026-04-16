import { MapPin, TrendingUp, Shield, Activity, AlertCircle } from 'lucide-react';

interface Props {
  isCritical: boolean;
}

export function GlobalOverwatch({ isCritical }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-4xl font-black mb-2 transition-colors duration-500 ${
          isCritical ? 'text-red-400' : 'text-cyan-400'
        }`}>
          GLOBAL OVERWATCH
        </h2>
        <p className="text-slate-400">Macro Supply Chain Map - APAC Region Focus</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/30 border-red-500/40' 
            : 'bg-slate-800/50 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <Shield className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
            <span className="text-sm text-slate-400">Total Global Vendors</span>
          </div>
          <p className={`text-5xl font-black ${isCritical ? 'text-red-300' : 'text-white'}`}>
            1,204
          </p>
        </div>

        <div className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/30 border-red-500/40' 
            : 'bg-slate-800/50 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <Activity className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
            <span className="text-sm text-slate-400">Active Sentinel Devices</span>
          </div>
          <p className={`text-5xl font-black ${isCritical ? 'text-red-300' : 'text-white'}`}>
            14,021
          </p>
        </div>

        <div className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/30 border-red-500/40' 
            : 'bg-slate-800/50 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-green-400'}`} />
            <span className="text-sm text-slate-400">Global Compliance Rate</span>
          </div>
          <p className={`text-5xl font-black ${isCritical ? 'text-red-300' : 'text-green-400'}`}>
            {isCritical ? '76.2%' : '98.4%'}
          </p>
        </div>
      </div>

      {/* Geographic Map Visualization */}
      <div className={`rounded-xl backdrop-blur-md border p-8 transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/20 border-red-500/40 shadow-[0_0_50px_rgba(239,68,68,0.3)]' 
          : 'bg-slate-800/30 border-slate-600/50'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`}>
          APAC Region - Supply Chain Network
        </h3>
        
        {/* Stylized Map Grid */}
        <div className="relative h-96 rounded-lg bg-slate-950/50 border border-slate-700/30 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }} />

          {/* Location Pins */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Primary Target: Jakarta */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={`relative transition-all duration-500 ${isCritical ? 'animate-pulse' : ''}`}>
                  <div className={`absolute inset-0 w-32 h-32 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl ${
                    isCritical ? 'bg-red-500/50' : 'bg-cyan-500/30'
                  }`} />
                  <MapPin className={`w-12 h-12 relative ${isCritical ? 'text-red-500' : 'text-cyan-400'}`} />
                </div>
              </div>

              {/* Other Vendor Locations */}
              <div className="absolute left-1/4 top-1/4">
                <MapPin className="w-6 h-6 text-green-400 opacity-60" />
              </div>
              <div className="absolute right-1/4 top-1/3">
                <MapPin className="w-6 h-6 text-green-400 opacity-60" />
              </div>
              <div className="absolute left-1/3 bottom-1/4">
                <MapPin className="w-6 h-6 text-green-400 opacity-60" />
              </div>
              <div className="absolute right-1/3 bottom-1/3">
                <MapPin className="w-6 h-6 text-green-400 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Vendor Trust Index */}
      <div className={`rounded-xl backdrop-blur-md border p-8 transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/40 border-red-500/60 shadow-[0_0_50px_rgba(239,68,68,0.4)]' 
          : 'bg-slate-800/40 border-slate-600/50'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className={`text-2xl font-bold mb-1 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`}>
              Target Vendor Analysis
            </h3>
            <p className="text-slate-400">PT. IndoSteel Fabrication (Jakarta)</p>
          </div>
          {isCritical && (
            <div className="flex items-center gap-2 bg-red-600/30 px-4 py-2 rounded-lg border border-red-500 animate-pulse">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-bold">CRITICAL BREACH</span>
            </div>
          )}
        </div>

        {/* Trust Index Gauge */}
        <div className="space-y-4">
          <div className="flex items-end gap-6">
            <div>
              <p className="text-sm text-slate-400 mb-2">Trust Index Score</p>
              <div className={`text-7xl font-black transition-colors duration-500 ${
                isCritical ? 'text-red-500' : 'text-green-400'
              }`}>
                {isCritical ? '24' : '92'}
                <span className="text-4xl text-slate-500">/100</span>
              </div>
            </div>
            
            <div className="flex-1 space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-400">Overall Status</span>
                  <span className={`font-bold ${isCritical ? 'text-red-400' : 'text-green-400'}`}>
                    {isCritical ? 'CRITICAL BREACH' : 'SAFE'}
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      isCritical ? 'bg-red-600' : 'bg-green-500'
                    }`}
                    style={{ width: isCritical ? '24%' : '92%' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div>
                  <p className="text-xs text-slate-500">Labor Compliance</p>
                  <p className={`font-bold ${isCritical ? 'text-red-400' : 'text-green-400'}`}>
                    {isCritical ? '12%' : '98%'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Environmental</p>
                  <p className={`font-bold ${isCritical ? 'text-red-400' : 'text-green-400'}`}>
                    {isCritical ? '8%' : '94%'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Supply Chain</p>
                  <p className={`font-bold ${isCritical ? 'text-yellow-400' : 'text-green-400'}`}>
                    {isCritical ? '52%' : '85%'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
