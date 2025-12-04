import React from 'react';
import { Activity, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const ServerStatusLight = ({ process, status }) => {
    const getStatusIcon = () => {
        switch (status?.toLowerCase()) {
            case 'online':
            case 'running':
                return <CheckCircle size={16} className="text-green-500" />;
            case 'warning':
            case 'degraded':
                return <AlertTriangle size={16} className="text-yellow-500" />;
            case 'offline':
            case 'error':
                return <XCircle size={16} className="text-red-500" />;
            default:
                return <Activity size={16} className="text-gray-500 animate-pulse" />;
        }
    };

    const getStatusColor = () => {
        switch (status?.toLowerCase()) {
            case 'online':
            case 'running':
                return 'border-green-500 bg-green-50';
            case 'warning':
            case 'degraded':
                return 'border-yellow-500 bg-yellow-50';
            case 'offline':
            case 'error':
                return 'border-red-500 bg-red-50';
            default:
                return 'border-gray-500 bg-gray-50';
        }
    };

    return (
        <div className={`inline-flex items-center gap-2 px-3 py-1 border rounded-md font-mono text-xs ${getStatusColor()}`}>
            {getStatusIcon()}
            <span className="font-bold">{process || 'UNKNOWN'}</span>
            <span className="text-gray-600">[{status || 'UNKNOWN'}]</span>
        </div>
    );
};

export default ServerStatusLight;
