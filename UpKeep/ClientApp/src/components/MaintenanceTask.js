import React, { Component } from 'react';
import MaintenanceTaskForm from './MaintenanceTaskForm';

export class MaintenanceTask extends Component {
    static displayName = MaintenanceTask.name;

    render() {

        return (
            <div>
                <h1>MaintenanceTask</h1>
                <p>This page will be used to create Maintenance Tasks. </p>
                <MaintenanceTaskForm />
            </div>
        );
    }
}
