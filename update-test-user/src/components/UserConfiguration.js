import React from 'react';

function UserConfiguration({ props  }) {
    return (
        <div>
            <h2>User Configuration</h2>
            <div>
                <label>ContactId</label>
                <input
                    type="text"
                    value={props.contactId}
                />
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={props.isTester}
                    />
                    IsTester
                </label>
            </div>
            <div>
                <label>Testing Environment</label>
                <select
                    value={props.testingEnvironment}
                >
                    <option value="501">501</option>
                    <option value="502">502</option>
                    <option value="541">541</option>
                    <option value="551">551</option>
                </select>
            </div>
        </div>
    );
}

export default UserConfiguration;
