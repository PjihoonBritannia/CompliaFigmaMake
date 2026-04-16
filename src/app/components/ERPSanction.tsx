import { Database, FileText, AlertTriangle, CheckCircle, XCircle, Shield, Video, Droplet } from 'lucide-react';

interface Props {
  isCritical: boolean;
}

export function ERPSanction({ isCritical }: Props) {
  const uploadedFiles = [
    { name: 'Resolution_Report_v2.pdf', size: '2.4 MB', uploaded: '2026-04-16 09:42 AM' },
    { name: 'Manager_Dismissal_Form.pdf', size: '856 KB', uploaded: '2026-04-16 09:45 AM' },
    { name: 'Fine_Receipt.jpg', size: '1.2 MB', uploaded: '2026-04-16 09:48 AM' },
  ];

  const hardwareEvidence = [
    { source: 'Vision AI', finding: 'Illegal night shift operations 02:00-04:00 AM', severity: 'critical' },
    { source: 'Bio-Gate ID-44', finding: 'Device tampering - power disconnect at 01:58 AM', severity: 'critical' },
    { source: 'Eco-Sentinel', finding: 'Toxic wastewater discharge 0.85ppm (17x threshold)', severity: 'critical' },
    { source: 'Vital-Band Network', finding: 'Worker cardiac distress alert logged', severity: 'high' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className={`text-4xl font-black mb-2 transition-colors duration-500 ${
          isCritical ? 'text-red-400' : 'text-cyan-400'
        }`}>
          ERP SANCTION CONSOLE & CAPA RESOLUTION
        </h2>
        <p className="text-slate-400">Post-Incident Response & Vendor Management Portal</p>
      </div>

      {/* SAP ERP Status */}
      <div className={`rounded-xl backdrop-blur-md border p-8 transition-all duration-500 ${
        isCritical 
          ? 'bg-red-950/40 border-red-500/60 shadow-[0_0_50px_rgba(239,68,68,0.4)]' 
          : 'bg-slate-800/40 border-slate-600/50'
      }`}>
        <div className="flex items-center gap-4 mb-6">
          <Database className={`w-10 h-10 ${isCritical ? 'text-red-400' : 'text-cyan-400'}`} />
          <div>
            <h3 className={`text-2xl font-bold ${isCritical ? 'text-red-400' : 'text-cyan-400'}`}>
              SAP S/4HANA ERP Status
            </h3>
            <p className="text-sm text-slate-400">Real-time integration with procurement system</p>
          </div>
        </div>

        {!isCritical ? (
          <div className="bg-green-950/30 border border-green-600/50 rounded-lg p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-green-400 font-bold text-lg">LINKED & ACTIVE</p>
                <p className="text-green-300 text-sm mt-1">Supply chain flowing nominally. No sanctions in effect.</p>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-slate-900/50 rounded p-3">
                <p className="text-xs text-slate-500">Active POs</p>
                <p className="text-xl font-bold text-white">247</p>
              </div>
              <div className="bg-slate-900/50 rounded p-3">
                <p className="text-xs text-slate-500">Material Flow</p>
                <p className="text-xl font-bold text-green-400">ACTIVE</p>
              </div>
              <div className="bg-slate-900/50 rounded p-3">
                <p className="text-xs text-slate-500">Payment Status</p>
                <p className="text-xl font-bold text-green-400">ON TIME</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-red-950/50 border-2 border-red-500 rounded-lg p-6 shadow-[0_0_30px_rgba(239,68,68,0.3)] animate-pulse">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-10 h-10 text-red-400" />
              <div>
                <p className="text-red-400 font-black text-2xl">🚨 SAP ERP AUTO KILL-SWITCH ENGAGED 🚨</p>
                <p className="text-red-300 text-sm mt-1">Automated sanctions triggered by compliance breach detection</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-black/50 rounded p-4 border-l-4 border-red-500">
                <p className="text-red-400 font-bold">Action: New POs PERMANENTLY FROZEN</p>
                <p className="text-red-300 text-sm">No new purchase orders can be created for PT. IndoSteel Fabrication</p>
              </div>
              <div className="bg-black/50 rounded p-4 border-l-4 border-red-500">
                <p className="text-red-400 font-bold">Material Outbound: BLOCKED</p>
                <p className="text-red-300 text-sm">All shipments from vendor halted pending CAPA resolution</p>
              </div>
              <div className="bg-black/50 rounded p-4 border-l-4 border-red-500">
                <p className="text-red-400 font-bold">Payment Processing: SUSPENDED</p>
                <p className="text-red-300 text-sm">Financial transactions frozen until manual override</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CAPA Documents & Evidence Portal */}
      {isCritical && (
        <>
          {/* Subcontractor Evidence Upload */}
          <div className="rounded-xl backdrop-blur-md border bg-slate-800/30 border-slate-600/50 p-6">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-bold text-cyan-400">Subcontractor Evidence Portal</h3>
            </div>

            <p className="text-slate-400 text-sm mb-4">
              PT. IndoSteel Fabrication has submitted the following CAPA (Corrective and Preventive Action) documents:
            </p>

            <div className="space-y-3">
              {uploadedFiles.map((file, index) => (
                <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{file.name}</p>
                      <p className="text-xs text-slate-500">{file.size} • Uploaded {file.uploaded}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-semibold transition-colors">
                    Review
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Hardware Evidence Cross-Validation */}
          <div className="rounded-xl backdrop-blur-md border bg-red-950/20 border-red-500/40 p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-red-400">Hardware Evidence Review</h3>
            </div>

            <div className="bg-black/50 rounded-lg p-4 mb-4">
              <p className="text-red-300 font-semibold mb-2">Cross-Validation Status: CONFIRMED</p>
              <p className="text-slate-400 text-sm">
                Multiple independent hardware sources have corroborated the compliance violations. 
                Evidence chain of custody secured via blockchain timestamping.
              </p>
            </div>

            <div className="space-y-3">
              {hardwareEvidence.map((evidence, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border-l-4 ${
                    evidence.severity === 'critical' 
                      ? 'bg-red-950/40 border-red-500' 
                      : 'bg-orange-950/40 border-orange-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      {evidence.source.includes('Vision') && <Video className="w-5 h-5 text-red-400 mt-0.5" />}
                      {evidence.source.includes('Bio-Gate') && <Shield className="w-5 h-5 text-red-400 mt-0.5" />}
                      {evidence.source.includes('Eco') && <Droplet className="w-5 h-5 text-red-400 mt-0.5" />}
                      {evidence.source.includes('Vital') && <AlertTriangle className="w-5 h-5 text-orange-400 mt-0.5" />}
                      <div>
                        <p className="font-bold text-white text-sm">{evidence.source}</p>
                        <p className={`text-sm mt-1 ${
                          evidence.severity === 'critical' ? 'text-red-300' : 'text-orange-300'
                        }`}>
                          {evidence.finding}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      evidence.severity === 'critical' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-orange-600 text-white'
                    }`}>
                      {evidence.severity.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="rounded-xl backdrop-blur-md border bg-slate-800/30 border-slate-600/50 p-8">
            <h3 className="text-xl font-bold text-white mb-6">CAPA Resolution Actions</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <button className="p-6 bg-red-600 hover:bg-red-700 border-2 border-red-400 rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] group">
                <div className="flex items-center gap-4 mb-3">
                  <XCircle className="w-8 h-8 text-white" />
                  <span className="text-xl font-black text-white">REJECT CAPA</span>
                </div>
                <p className="text-red-100 text-sm text-left">
                  Permanently terminate vendor relationship. Evidence deemed insurmountable. 
                  ERP sanctions remain in effect indefinitely.
                </p>
              </button>

              <button 
                disabled 
                className="p-6 bg-slate-800/50 border-2 border-slate-700 rounded-xl opacity-50 cursor-not-allowed"
              >
                <div className="flex items-center gap-4 mb-3">
                  <CheckCircle className="w-8 h-8 text-slate-500" />
                  <span className="text-xl font-black text-slate-500">APPROVE CAPA</span>
                </div>
                <p className="text-slate-500 text-sm text-left">
                  Manual ERP unlock and vendor reinstatement. Currently disabled pending executive review 
                  of submitted CAPA documents.
                </p>
                <div className="mt-3 px-3 py-1 bg-yellow-900/50 border border-yellow-600/50 rounded text-yellow-400 text-xs inline-block">
                  REQUIRES EXECUTIVE APPROVAL
                </div>
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-950/30 border border-blue-600/40 rounded-lg">
              <p className="text-blue-300 text-sm">
                <strong>Note:</strong> This decision is permanent and will be logged in the blockchain audit trail. 
                All actions are subject to Britannia Inc. corporate governance review.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Normal State - No CAPA */}
      {!isCritical && (
        <div className="rounded-xl backdrop-blur-md border bg-slate-800/30 border-slate-600/50 p-8">
          <div className="text-center py-12">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-400 mb-2">No Active CAPA Cases</h3>
            <p className="text-slate-400">
              PT. IndoSteel Fabrication is in full compliance. No corrective actions required.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
