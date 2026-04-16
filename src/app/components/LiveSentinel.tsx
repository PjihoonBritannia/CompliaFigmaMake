import { useState } from 'react';
import { Eye, Video, Fingerprint, Droplet, Heart, Lock, Layers, Grid3x3, AlertTriangle } from 'lucide-react';
import { LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  isCritical: boolean;
}

export function LiveSentinel({ isCritical }: Props) {
  const [viewMode, setViewMode] = useState<'panorama' | 'grid'>('panorama');

  // Mock data for charts
  const phData = [
    { time: '00:00', value: 7.2 },
    { time: '04:00', value: 7.1 },
    { time: '08:00', value: 7.3 },
    { time: '12:00', value: 7.2 },
    { time: '16:00', value: 7.4 },
    { time: '20:00', value: isCritical ? 8.5 : 7.2 },
  ];

  const criticalPhData = [
    { time: '00:00', value: 7.2 },
    { time: '01:00', value: 7.3 },
    { time: '02:00', value: 8.9 },
    { time: '03:00', value: 9.2 },
    { time: '04:00', value: 8.5 },
  ];

  const heartRateData = [
    { x: 1, y: 72 },
    { x: 2, y: 75 },
    { x: 3, y: 78 },
    { x: 4, y: 76 },
    { x: 5, y: isCritical ? 142 : 79 },
    { x: 6, y: 77 },
  ];

  const feeds = [
    {
      id: 1,
      name: 'Vision AI',
      icon: Video,
      normal: {
        status: 'Scanning',
        message: 'Safety Gear 100%',
        indicator: 'green',
      },
      critical: {
        status: 'ALERT',
        message: 'Illegal Night Shift Detected at 02:00 AM',
        indicator: 'red',
      },
    },
    {
      id: 2,
      name: 'Bio-Gate',
      icon: Fingerprint,
      normal: {
        status: 'Online',
        message: 'Shift 1 Entry Normal',
        indicator: 'green',
      },
      critical: {
        status: 'OFFLINE',
        message: 'Power maliciously severed',
        indicator: 'red',
      },
    },
    {
      id: 3,
      name: 'Eco-Sentinel',
      icon: Droplet,
      normal: {
        status: 'Monitoring',
        message: 'pH: 7.2 (Safe)',
        indicator: 'green',
      },
      critical: {
        status: 'CRITICAL',
        message: 'Toxic Discharge: 0.85ppm (THRESHOLD EXCEEDED)',
        indicator: 'red',
      },
    },
    {
      id: 4,
      name: 'Vital-Band',
      icon: Heart,
      normal: {
        status: 'Active',
        message: 'Avg HR: 78 BPM. Falls: 0',
        indicator: 'green',
      },
      critical: {
        status: 'SOS',
        message: 'Worker Cardiac Anomaly Detected',
        indicator: 'red',
      },
    },
    {
      id: 5,
      name: 'Trace-Lock',
      icon: Lock,
      normal: {
        status: 'Secured',
        message: 'Container #IDN-884 Seal Intact',
        indicator: 'green',
      },
      critical: {
        status: 'HALTED',
        message: 'Shipment HALTED',
        indicator: 'red',
      },
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header with View Toggle */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-4xl font-black mb-2 transition-colors duration-500 ${
            isCritical ? 'text-red-400' : 'text-cyan-400'
          }`}>
            LIVE SENTINEL MONITOR
          </h2>
          <p className="text-slate-400">Real-Time Hardware Observation Deck</p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-2 bg-slate-900/50 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setViewMode('panorama')}
            className={`px-4 py-2 rounded flex items-center gap-2 transition-all ${
              viewMode === 'panorama'
                ? isCritical
                  ? 'bg-red-600 text-white'
                  : 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            Panorama View
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded flex items-center gap-2 transition-all ${
              viewMode === 'grid'
                ? isCritical
                  ? 'bg-red-600 text-white'
                  : 'bg-cyan-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid3x3 className="w-4 h-4" />
            Modular Grid View
          </button>
        </div>
      </div>

      {/* Hardware Feeds */}
      {viewMode === 'panorama' ? (
        // Panorama View - Stacked Layout
        <div className="space-y-4">
          {feeds.map((feed) => {
            const Icon = feed.icon;
            const data = isCritical ? feed.critical : feed.normal;
            
            return (
              <div
                key={feed.id}
                className={`rounded-xl backdrop-blur-md border p-6 transition-all duration-500 ${
                  isCritical && data.indicator === 'red'
                    ? 'bg-red-950/40 border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-pulse'
                    : 'bg-slate-800/40 border-slate-600/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      data.indicator === 'red' ? 'bg-red-600/30' : 'bg-cyan-600/30'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        data.indicator === 'red' ? 'text-red-400' : 'text-cyan-400'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{feed.name}</h3>
                      <p className={`text-sm ${
                        data.indicator === 'red' ? 'text-red-400' : 'text-slate-400'
                      }`}>
                        {data.status}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <p className={`text-lg font-semibold ${
                      data.indicator === 'red' ? 'text-red-300' : 'text-slate-300'
                    }`}>
                      {data.message}
                    </p>
                    <div className={`w-3 h-3 rounded-full ${
                      data.indicator === 'red' 
                        ? 'bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]' 
                        : 'bg-green-500'
                    }`} />
                  </div>
                </div>

                {/* Special Visualizations */}
                {feed.name === 'Eco-Sentinel' && (
                  <div className="mt-4 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={isCritical ? criticalPhData : phData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="time" stroke="#64748b" />
                        <YAxis stroke="#64748b" domain={[6, isCritical ? 10 : 8]} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1e293b', 
                            border: '1px solid #475569',
                            borderRadius: '8px'
                          }} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke={isCritical ? '#ef4444' : '#06b6d4'} 
                          strokeWidth={2}
                          dot={{ fill: isCritical ? '#ef4444' : '#06b6d4', r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {feed.name === 'Vital-Band' && (
                  <div className="mt-4 h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="x" stroke="#64748b" />
                        <YAxis dataKey="y" stroke="#64748b" domain={[60, isCritical ? 150 : 90]} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1e293b', 
                            border: '1px solid #475569',
                            borderRadius: '8px'
                          }} 
                        />
                        <Scatter 
                          data={heartRateData} 
                          fill={isCritical ? '#ef4444' : '#06b6d4'} 
                        />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        // Grid View - Modular Cards
        <div className="grid grid-cols-3 gap-4">
          {feeds.map((feed) => {
            const Icon = feed.icon;
            const data = isCritical ? feed.critical : feed.normal;
            
            return (
              <div
                key={feed.id}
                className={`rounded-xl backdrop-blur-md border p-6 transition-all duration-500 ${
                  isCritical && data.indicator === 'red'
                    ? 'bg-red-950/40 border-red-500/60 shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-pulse'
                    : 'bg-slate-800/40 border-slate-600/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    data.indicator === 'red' ? 'bg-red-600/30' : 'bg-cyan-600/30'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      data.indicator === 'red' ? 'text-red-400' : 'text-cyan-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white">{feed.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`w-2 h-2 rounded-full ${
                        data.indicator === 'red' 
                          ? 'bg-red-500 animate-pulse' 
                          : 'bg-green-500'
                      }`} />
                      <p className={`text-xs ${
                        data.indicator === 'red' ? 'text-red-400' : 'text-slate-400'
                      }`}>
                        {data.status}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className={`text-sm ${
                  data.indicator === 'red' ? 'text-red-300 font-semibold' : 'text-slate-300'
                }`}>
                  {data.message}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Critical Alert Banner */}
      {isCritical && (
        <div className="rounded-xl bg-red-950/50 border-2 border-red-500 p-6 shadow-[0_0_40px_rgba(239,68,68,0.4)]">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse" />
            <div>
              <h3 className="text-xl font-bold text-red-400 mb-1">CRITICAL HARDWARE BREACH DETECTED</h3>
              <p className="text-red-300 text-sm">
                Multiple Sentinel devices reporting simultaneous anomalies. Bio-Gate tampering confirmed. 
                Vision AI captured unauthorized night operations. Eco-Sentinel registered toxic discharge event. 
                Cross-validation in progress across all hardware streams.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
