# Flow Integration System

This project includes an automated flow integration system that handles node sequences.

## Available Flow Chains


### Chain 1: flow_inbound-email-1763097045884_1766551025556
- **Nodes**: inbound-email → openaiAgentSDKNode
- **Node Count**: 2
- **Chain Type**: linear


### Chain 2: flow_openaiAgentSDKNode-1763097052561_1766551025557
- **Nodes**: openaiAgentSDKNode
- **Node Count**: 1
- **Chain Type**: linear


### Chain 3: flow_openaiAgentSDKNode-1763179222370_1766551025557
- **Nodes**: openaiAgentSDKNode
- **Node Count**: 1
- **Chain Type**: linear


### Chain 4: flow_openaiAgentSDKNode-1763190181978_1766551025557
- **Nodes**: openaiAgentSDKNode
- **Node Count**: 1
- **Chain Type**: linear


## Usage

The flow system is automatically initialized when the application loads. You can execute flows using:

```javascript
// Execute all flows
const results = await executeAllFlows({
  formData: { name: 'John', email: 'john@example.com' },
  context: 'user_action'
});

// Execute a specific flow chain
const specificResult = await executeSpecificFlow('flow_inbound-email-1763097045884_1766551025556', {
  data: 'input_data'
});

// Get information about available flows
const flowInfo = getFlowChainInfo();
console.log('Available flows:', flowInfo);
```

## Integration with Forms

Forms automatically trigger their connected flow chains when submitted. The flow system handles:

- **Data Collection**: Gathering form data from input fields
- **AI Processing**: Processing data through OpenAI Agent SDK nodes
- **UI Updates**: Updating headings, paragraphs, and other UI elements
- **API Calls**: Making requests to external services
- **Integration Events**: Triggering Slack, email, and other integrations

## Flow Chain Types

- **Linear**: Simple A → B → C sequences
- **Branching**: Flows that split into multiple paths
- **Merging**: Multiple inputs combining into one flow
- **Conditional**: Flows with decision points

## Debugging

Enable debugging by setting:

```javascript
window.localStorage.setItem('flow-debug', 'true');
```

This will provide detailed console logs of flow execution.
