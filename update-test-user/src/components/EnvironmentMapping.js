import React from 'react';

function EnvironmentMapping() {
    const environments = [
        { id: '501', url: 'https://sit-gateway.optus.com.au' },
        { id: '502', url: 'https://sit2-gateway.optus.com.au' },
    ];

    return (
        <div className="environment-mapping">
            <h2>Environment Mapping</h2>
            <table>
                <thead>
                    <tr>
                        <th>Environment</th>
                        <th>Endpoint</th>
                    </tr>
                </thead>
                <tbody>
                    {environments.map(env => (
                        <tr>
                            <td>{env.id}</td>
                            <td>{env.url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EnvironmentMapping;
