import { Server, Wifi, Shield, AlertTriangle, CheckCircle, Activity } from 'lucide-react';

interface Props {
  isCritical: boolean;
}

export function FleetOS({ isCritical }: Props) {
  const devices = [
    { id: 'Vision-01', type: 'Vision AI', status: isCritical ? 'active' : 'online', x: 20, y: 30 },
    { id: 'Vision-02', type: 'Vision AI', status: 'online', x: 80, y: 30 },
    { id: 'Bio-Gate-44', type: 'Bio-Gate', status: isCritical ? 'tampered' : 'online', x: 50, y: 50 },
    { id: 'Eco-01', type: 'Eco-Sentinel', status: isCritical ? 'alert' : 'online', x: 35, y: 70 },
    { id: 'Vital-Hub', type: 'Vital-Band', status: isCritical ? 'sos' : 'online', x: 65, y: 70 },
    { id: 'Trace-88', type: 'Trace-Lock', status: 'online', x: 20, y: 90 },
    { id: 'Trace-89', type: 'Trace-Lock', status: 'online', x: 80, y: 90 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-4xl font-black mb-2 transition-colors duration-500 ${
          isCritical ? 'text-red-400' : 'text-cyan-400'
        }`}>
          FleetOS TELEMETRY & DEVICE HEALTH
        </h2>
        <p className="text-slate-400">Infrastructure Admin - Jakarta Factory Network</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/30 border-red-500/40' 
            : 'bg-slate-800/50 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <Wifi className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
            <span className="text-sm text-slate-400">Global OTA Firmware Sync</span>
          </div>
          <p className={`text-5xl font-black ${isCritical ? 'text-red-300' : 'text-green-400'}`}>
            {isCritical ? '92%' : '100%'}
          </p>
        </div>

        <div className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/30 border-red-500/40' 
            : 'bg-slate-800/50 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <Shield className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
            <span className="text-sm text-slate-400">Zero-Knowledge Hash IDs</span>
          </div>
          <p className={`text-5xl font-black ${isCritical ? 'text-red-300' : 'text-white'}`}>
            245,192
          </p>
        </div>

        <div className={`p-6 rounded-xl backdrop-blur-md border transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/30 border-red-500/40' 
            : 'bg-slate-800/50 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <Activity className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-green-400'}`} />
            <span className="text-sm text-slate-400">Anti-Tampering Engine</span>
          </div>
          <p className={`text-3xl font-black ${isCritical ? 'text-red-400' : 'text-green-400'}`}>
            {isCritical ? 'BREACH' : 'STANDBY'}
          </p>
        </div>
      </div>

      {/* Hexagonal Grid Map */}
      <div className={`rounded-xl backdrop-blur-md border p-8 transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/20 border-red-500/40 shadow-[0_0_50px_rgba(239,68,68,0.3)]' 
          : 'bg-slate-800/30 border-slate-600/50'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`}>
          Device Network Topology
        </h3>
        
        {/* Device Map */}
        <div className="relative h-96 rounded-lg bg-slate-950/50 border border-slate-700/30 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />

          {/* Device Nodes */}
          <div className="absolute inset-0">
            {devices.map((device) => {
              const isCompromised = device.status === 'tampered' || device.status === 'alert' || device.status === 'sos';
              
              return (
                <div
                  key={device.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${device.x}%`, top: `${device.y}%` }}
                >
                  {/* Connection Lines */}
                  <div className={`absolute w-32 h-0.5 origin-left ${
                    isCompromised ? 'bg-red-500/30' : 'bg-cyan-500/30'
                  }`} style={{ transform: 'rotate(45deg)' }} />
                  
                  {/* Node Circle */}
                  <div className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isCompromised
                      ? 'bg-red-950/50 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse'
                      : 'bg-cyan-950/50 border-cyan-500 shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                  }`}>
                    <Server className={`w-6 h-6 ${isCompromised ? 'text-red-400' : 'text-cyan-400'}`} />
                    
                    {/* Status Indicator */}
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-950 ${
                      isCompromised 
                        ? 'bg-red-500 animate-pulse' 
                        : 'bg-green-500'
                    }`} />
                  </div>

                  {/* Label */}
                  <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-center ${
                    isCompromised ? 'text-red-400' : 'text-cyan-400'
                  }`}>
                    <p className="text-xs font-bold">{device.id}</p>
                    <p className="text-xs text-slate-500">{device.type}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Device Status Table */}
      <div className={`rounded-xl backdrop-blur-md border overflow-hidden transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/20 border-red-500/40' 
          : 'bg-slate-800/30 border-slate-600/50'
      }`}>
        <div className="p-6 border-b border-slate-700/50">
          <h3 className={`text-2xl font-bold ${isCritical ? 'text-red-400' : 'text-cyan-400'}`}>
            Mass Biometric Sync Status
          </h3>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {devices.map((device) => {
              const isCompromised = device.status === 'tampered' || device.status === 'alert' || device.status === 'sos';
              
              return (
                <div
                  key={device.id}
                  className={`p-4 rounded-lg border flex items-center justify-between ${
                    isCompromised
                      ? 'bg-red-950/40 border-red-500/50'
                      : 'bg-slate-900/50 border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {isCompromised ? (
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    )}
                    <div>
                      <p className="font-bold text-white">{device.id}</p>
                      <p className="text-sm text-slate-400">{device.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Status</p>
                      <p className={`font-bold ${isCompromised ? 'text-red-400' : 'text-green-400'}`}>
                        {device.status.toUpperCase()}
                      </p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      isCompromised 
                        ? 'bg-red-500 animate-pulse' 
                        : 'bg-green-500'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Critical Error Log */}
      {isCritical && (
        <div className="rounded-xl bg-red-950/50 border-2 border-red-500 p-6 shadow-[0_0_40px_rgba(239,68,68,0.4)]">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-400 animate-pulse flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-400 mb-3">🚨 TAMPER DETECTED - CRITICAL SECURITY BREACH</h3>
              <div className="bg-black/50 rounded-lg p-4 font-mono text-sm text-red-300 space-y-2">
                <p>[01:58:02 AM] ALERT: Bio-Gate ID-44 voltage dropped to 0V</p>
                <p>[01:58:05 AM] POWER TRACE: External disconnect detected</p>
                <p>[01:58:08 AM] FORENSICS: Intentional evidence destruction confirmed</p>
                <p>[01:58:12 AM] CROSS-VALIDATION: Vision AI timestamp correlation in progress</p>
                <p>[01:58:15 AM] ANALYSIS: Synchronized with Eco-Sentinel toxic discharge event</p>
                <p>[01:58:18 AM] CONCLUSION: Coordinated compliance evasion attempt detected</p>
              </div>
              <div className="mt-4 p-3 bg-red-950/50 rounded border border-red-600/50">
                <p className="text-red-400 font-bold text-sm">
                  Automated Response: ERP Kill-Switch triggered. All hardware evidence streams frozen for forensic review.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
