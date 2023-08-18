import { AppBar, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';




const TabsSection = () => {

    const [index, setIndex] = useState(0)

    const handleTabs = (e, value) => {
        setIndex(value)
    }



    return (
        <div>
            <AppBar position='static'>
                <Tabs value={index} onChange={handleTabs}>
                    <Tab label="Item 1"></Tab>
                    <Tab label="Item 2"></Tab>
                    <Tab label="Item 3"></Tab>
                </Tabs>
            </AppBar>

            {/* <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel> */}

            <div>
                Content 1
            </div>
        </div>
    );
};

export default TabsSection;