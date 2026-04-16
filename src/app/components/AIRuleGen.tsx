import { Brain, FileText, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

interface Props {
  isCritical: boolean;
}

export function AIRuleGen({ isCritical }: Props) {
  const rules = [
    {
      id: 401,
      title: 'Max 54 Work Hours/Week',
      status: isCritical ? 'breached' : 'active',
      description: 'Enforced via Bio-Gate attendance tracking',
    },
    {
      id: 402,
      title: 'Heavy Metals Wastewater < 0.05ppm',
      status: isCritical ? 'breached' : 'active',
      description: 'Real-time monitoring via Eco-Sentinel',
    },
    {
      id: 403,
      title: 'Zero Child Labor',
      status: 'active',
      description: 'Strictly enforced via Bio-Gate biometric verification',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-4xl font-black mb-2 transition-colors duration-500 ${
          isCritical ? 'text-red-400' : 'text-cyan-400'
        }`}>
          AI RULE-GEN & COMPLIANCE CONFIGURATOR
        </h2>
        <p className="text-slate-400">Automated Vendor Onboarding & Regulation Synthesis</p>
      </div>

      {/* Split Screen Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left: Input Parameters */}
        <div className={`rounded-xl backdrop-blur-md border p-6 transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/20 border-red-500/40' 
            : 'bg-slate-800/30 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <Zap className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
            <h3 className="text-xl font-bold text-white">Input Configuration</h3>
          </div>

          {/* Target Vendor */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-slate-400 block mb-2">Target Vendor</label>
              <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                <p className="text-white font-semibold">PT. IndoSteel Fabrication</p>
                <p className="text-xs text-slate-500 mt-1">Jakarta, Indonesia • Manufacturing</p>
              </div>
            </div>

            {/* APIs Being Crawled */}
            <div>
              <label className="text-sm text-slate-400 block mb-2">APIs Crawling</label>
              <div className="space-y-2">
                <div className={`p-3 rounded-lg border flex items-center gap-3 ${
                  isCritical 
                    ? 'bg-red-950/30 border-red-600/40' 
                    : 'bg-slate-900/50 border-slate-700'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isCritical ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className="text-sm text-slate-300">Indonesia Labor Law Act No.13/2003</span>
                </div>
                <div className={`p-3 rounded-lg border flex items-center gap-3 ${
                  isCritical 
                    ? 'bg-red-950/30 border-red-600/40' 
                    : 'bg-slate-900/50 border-slate-700'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isCritical ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className="text-sm text-slate-300">EU CBAM Regulation (2023)</span>
                </div>
                <div className={`p-3 rounded-lg border flex items-center gap-3 ${
                  isCritical 
                    ? 'bg-red-950/30 border-red-600/40' 
                    : 'bg-slate-900/50 border-slate-700'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${isCritical ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
                  <span className="text-sm text-slate-300">Britannia ESG Guidelines v4.2</span>
                </div>
              </div>
            </div>

            {/* AI Engine Status */}
            <div className={`p-4 rounded-lg border ${
              isCritical 
                ? 'bg-red-950/40 border-red-500/50' 
                : 'bg-blue-950/40 border-blue-500/50'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Brain className={`w-5 h-5 ${isCritical ? 'text-red-400' : 'text-blue-400'}`} />
                <span className="text-sm font-semibold text-white">AI Engine Status</span>
              </div>
              <p className="text-xs text-slate-400">
                {isCritical 
                  ? 'Violation Detection Mode - Cross-referencing breach evidence' 
                  : 'Synthesis Complete - 3 rules generated and deployed'}
              </p>
            </div>
          </div>
        </div>

        {/* Right: Generated Rules Output */}
        <div className={`rounded-xl backdrop-blur-md border p-6 transition-all duration-500 ${
          isCritical 
            ? 'bg-red-950/20 border-red-500/40' 
            : 'bg-slate-800/30 border-slate-600/50'
        }`}>
          <div className="flex items-center gap-3 mb-6">
            <FileText className={`w-8 h-8 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
            <h3 className="text-xl font-bold text-white">Generated Rule-Set</h3>
          </div>

          <div className="space-y-4">
            {rules.map((rule) => (
              <div
                key={rule.id}
                className={`p-5 rounded-lg border-2 transition-all duration-500 ${
                  rule.status === 'breached'
                    ? 'bg-red-950/40 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-pulse'
                    : rule.status === 'active'
                      ? isCritical
                        ? 'bg-slate-900/50 border-slate-700'
                        : 'bg-green-950/30 border-green-600/50'
                      : 'bg-slate-900/50 border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {rule.status === 'breached' ? (
                      <AlertTriangle className="w-6 h-6 text-red-500" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    )}
                    <div>
                      <p className="text-xs text-slate-500">Rule ID #{rule.id}</p>
                      <h4 className={`font-bold text-lg ${
                        rule.status === 'breached' ? 'text-red-400' : 'text-white'
                      }`}>
                        {rule.title}
                      </h4>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    rule.status === 'breached'
                      ? 'bg-red-600 text-white'
                      : 'bg-green-600 text-white'
                  }`}>
                    {rule.status === 'breached' ? 'BREACHED' : 'ACTIVE'}
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-3">{rule.description}</p>

                {rule.status === 'breached' && (
                  <div className="mt-4 p-3 bg-red-950/50 rounded border border-red-600/50">
                    <p className="text-red-400 font-bold text-sm flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      RULE BREACHED - EVIDENCE CAPTURED
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className={`mt-6 p-4 rounded-lg border ${
            isCritical 
              ? 'bg-red-950/30 border-red-600/40' 
              : 'bg-slate-900/50 border-slate-700'
          }`}>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Total Rules Active</span>
              <span className="font-bold text-white">3</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-slate-400">Compliance Status</span>
              <span className={`font-bold ${isCritical ? 'text-red-400' : 'text-green-400'}`}>
                {isCritical ? '33% (2 BREACHED)' : '100%'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Panel */}
      <div className={`rounded-xl backdrop-blur-md border p-6 transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/30 border-red-500/40' 
          : 'bg-blue-950/30 border-blue-500/50'
      }`}>
        <h4 className={`font-bold text-lg mb-3 ${isCritical ? 'text-red-400' : 'text-blue-400'}`}>
          AI Configuration Notes
        </h4>
        <p className="text-sm text-slate-300 leading-relaxed">
          {isCritical 
            ? 'CRITICAL ALERT: AI engine has detected multiple simultaneous rule violations. Rules #401 and #402 show concurrent breaches suggesting coordinated compliance evasion. Hardware evidence from Vision AI and Eco-Sentinel confirms violations occurred during unauthorized night operations.'
            : 'AI Rule Generator has successfully synthesized compliance requirements from 3 regulatory sources. All rules are actively monitored via deployed Sentinel hardware network. System automatically cross-validates multiple data streams to ensure zero false positives.'}
        </p>
      </div>
    </div>
  );
}
