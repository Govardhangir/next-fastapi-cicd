
// ==> GENERIC FLOW INTEGRATION SYSTEM <==
// Auto-generated flow execution code
// Generated on: 2025-12-24T04:37:05.542Z

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Import Template Engine for variable processing
import { TemplateExpressionEngine } from './template-engine';






// TypeScript interfaces for flow system
interface FlowResult {
  success: boolean;
  results: Record<string, any>;
  errors: string[];
  chainId: string;
  executionTime?: number;
  totalChains?: number;
  successfulChains?: number;
}

interface ButtonResult {
  buttonId: string;
  clicked: boolean;
  inputData: any;
}



// Global window interface extensions  
declare global {
  interface Window {
    executeAllFlows?: (triggerData?: any, specificChainId?: string | null) => Promise<any>;
    executeSpecificFlow?: (chainId: string, data?: any) => Promise<any>;
     clearConversationHistory: (
      agentId: any,
      userId: any,
      storageType?: 'simple' | 'session'
    ) => boolean;
    getConversationHistory: (
      agentId: any,
      userId: any,
      storageType?: 'simple' | 'session'
    ) => any[];
    getFlowChainInfo?: () => any[];
    dataFlow?: Record<string, any>;
    getPreviousResult?: (nodeId: any) => any;
    getFlowResult?: (nodeType: any) => any;
    getAllFlowResults?: () => Record<string, any>;
    getInput?: (name: any) => any;
    getValue?: (name: any) => any;
    setValue?: (name: any, value: any) => any;
    clearInput?: (name: any) => any;
        // Additional window properties used in the code
    __currentWorkflowNodes?: any[];
    __flowChainMetadata?: any;
    mainChainFlowResults?: any;
    _globalExecutionTracker?: {
      executedFlows: Set<string>;
      isAutoExecutionComplete: boolean;
      executionTime?: number;
      executionInProgress: boolean;
    };
    whatsappPollingIntervals?: Record<string, ReturnType<typeof setInterval>>;
    telegramPollingIntervals?: Record<string, ReturnType<typeof setInterval>>;
    [key: string]: any;
  }
}

// Type declarations for common variables and refs
interface FormData extends Record<string, any> {}
interface InputRefsType {
  current: Record<string, HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
}
interface TextareaRefsType {
  current: Record<string, HTMLTextAreaElement>;
}
interface SelectRefsType {
  current: Record<string, HTMLSelectElement>;
}

// Declare common variables that might be used in generated code
declare const inputRefs: InputRefsType;
declare const textareaRefs: TextareaRefsType;
declare const selectRefs: SelectRefsType;
declare const flowResults: Record<string, any>;
declare const flowErrors: string[];
declare const fieldMapping: Record<string, string>;
declare const templateContext: Record<string, any>;

// Error handling utility
function getErrorMessage(error: unknown): string {
  return (error as Error)?.message || String(error) || 'Unknown error';
}

interface FormResult {
  formId: string;
  inputData: Record<string, any>;
}

interface SlackResult {
  success: boolean;
  message: string;
  webhookUrl: string;
  response?: any;
  inputData: any;
  error?: string;
}

interface OpenAIResult {
  text: string;
  content: string;
  rawResponse?: any;
  inputData: any;
  error?: string;
}

interface ApiGetResult {
  success: boolean;
  url: string;
  status?: number;
  statusText?: string;
  data?: any;
  headers?: Record<string, string>;
  error?: string;
  timestamp: string;
}

interface GoogleSheetsResult {
  success: boolean;
  operation: string;
  spreadsheetId: string;
  range: string;
  data?: any;
  rawResponse?: any;
  error?: string;
  timestamp: string;
}

interface FlowChainInfo {
  id: string;
  nodeTypes: string[];
  nodeCount: number;
  chainType: string;
  startNode?: any;
  endNode?: any;
  nodes: any[];
}


console.log('🚀 Flow Integration System Initialized');
console.log('📊 Available flow chains: 4');



// ==> FLOW CHAIN: flow_inbound-email-1763097045884_1766551025527 <==
// Chain: inbound-email → openaiAgentSDKNode

const executeFlowChain_flow_inbound_email_1763097045884_1766551025527 = async (initialData: any = {}): Promise<FlowResult> => {
  // CRITICAL FIX: Extract ONLY essential trigger fields to prevent stale data propagation
  // Do NOT spread entire initialData as it may contain stale nested references
  const cleanedInitialData: any = {
    buttonId: initialData?.buttonId,
    formId: initialData?.formId,
    formData: initialData?.formData ? { ...initialData.formData } : {},
    clickTimestamp: initialData?.clickTimestamp,
    trigger: initialData?.trigger
  };
  
  // CRITICAL: Create flowResults as a NEW object, not a reference to cleanedInitialData
  // This ensures complete isolation from any stale state
  const flowResults: Record<string, any> = {
    ...cleanedInitialData
  };
  const flowErrors: string[] = [];
  let currentResult: any = cleanedInitialData; // Use a mutable variable for passing data between steps
  
  // WORKFLOW ISOLATION FIX: Assign unique execution ID for this workflow run
  flowResults._executionId = `flow_inbound_email_1763097045884_1766551025527_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  console.log('🔗 Starting flow chain: flow_inbound-email-1763097045884_1766551025527');
  console.log('📊 Initial data:', initialData);
  console.log('🆔 Execution ID:', flowResults._executionId);

  try {

    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};




    // Enhanced Data Flow Helper Functions - CRITICAL: Define early to ensure availability in all contexts
    // This ensures dataFlow is available immediately after initialization for all node processors
    const dataFlow = {
      // Get current result
      current: () => flowResults.currentResult,

      // Get previous step result
      previous: () => flowResults.previousResult,

      // Get result by variable name
      get: (name: any) => {
        // First check at the top level (for form fields)
        if (flowResults[name] !== undefined) {
          return flowResults[name];
        }

        // Try specialized collections
        if (flowResults.variables && flowResults.variables[name]) {
          return flowResults.variables[name];
        }
        if (flowResults.inputs && flowResults.inputs[name]) {
          return flowResults.inputs[name];
        }
        if (flowResults.formData && flowResults.formData[name]) {
          return flowResults.formData[name];
        }
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[name]) {
          return flowResults.inboundEmailData[name];
        }
        if (flowResults.apiResponses && flowResults.apiResponses[name]) {
          return flowResults.apiResponses[name];
        }
        if (flowResults.calculations && flowResults.calculations[name]) {
          return flowResults.calculations[name];
        }
        if (flowResults.aiResponses && flowResults.aiResponses[name]) {
          return flowResults.aiResponses[name];
        }

        // Search in node results
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).displayName === name) {
            return (result as any).data;
          }
        }

        // Try case-insensitive matching as a last resort
        const lowerName = name.toLowerCase();

        // Check top level
        for (const key of Object.keys(flowResults)) {
          if (key.toLowerCase() === lowerName) {
            return flowResults[key];
          }
        }

        // Check form data
        if (flowResults.formData) {
          for (const key of Object.keys(flowResults.formData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.formData[key];
            }
          }
        }

        // Check inbound email data
        if (flowResults.inboundEmailData) {
          for (const key of Object.keys(flowResults.inboundEmailData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.inboundEmailData[key];
            }
          }
        }

        return undefined;
      },

      // Get result by node ID
      getByNodeId: (nodeId: any) => {
        if (!flowResults.nodeResults || !flowResults.nodeResults[nodeId]) {
          return undefined;
        }

        const nodeResult = flowResults.nodeResults[nodeId];

        // For form nodes, return the data object which contains all form fields
        // This allows accessing specific fields like: dataFlow.getByNodeId("form-123").name
        if (nodeResult.nodeType === 'form' && nodeResult.data) {
          return nodeResult.data;
        }

        // CRITICAL FIX: For button nodes, return the buttonId for HTTP URL construction
        // This allows HTTP nodes to use {{dataFlow.getByNodeId("button-1761322615789")}} in URLs
        if (nodeResult.nodeType === 'button' && nodeResult.data && nodeResult.data.buttonId) {
          return nodeResult.data.buttonId;
        }

        // CRITICAL FIX: For conditional nodes, return the conditionResult as string for chaining
        // This allows subsequent condition nodes to properly reference previous condition results
        if (nodeResult.nodeType === 'if-conditional' && nodeResult.data && nodeResult.data.conditionResult !== undefined) {
          return String(nodeResult.data.conditionResult);
        }

        // CRITICAL FIX: For input nodes, return the actual user-provided value when possible
        if (nodeResult.nodeType === 'input' && nodeResult.data) {
          try {
            if (typeof nodeResult.data.get === 'function') {
              const inputValue = nodeResult.data.get();
              if (inputValue !== undefined && inputValue !== null) {
                return inputValue;
              }
            }
          } catch (error) {
            console.warn('dataFlow.getByNodeId input get() failed:', error);
          }

          if (nodeResult.data.currentValue !== undefined) {
            return nodeResult.data.currentValue;
          }

          if (nodeResult.data.value !== undefined) {
            return nodeResult.data.value;
          }
        }

        // Default: return the data property of the node
        return nodeResult.data;
      },

      // Get all variables of a specific type
      getByType: (nodeType: any) => {
        const results = [];
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).nodeType === nodeType) {
            results.push((result as any).data);
          }
        }
        return results;
      },

      // Get last N results
      getLast: (n: any = 1) => {
        const allResults = Object.values(flowResults.nodeResults || {})
          .sort((a: any, b: any) => (b as any).stepNumber - (a as any).stepNumber);
        return n === 1 ? (allResults[0] as any)?.data : allResults.slice(0, n).map((r: any) => (r as any).data);
      },

      // Get all available variable names
      getAvailableNames: () => {
        const names = [];

        // Add from specialized collections
        if (flowResults.variables) names.push(...Object.keys(flowResults.variables));
        if (flowResults.inputs) names.push(...Object.keys(flowResults.inputs));
        if (flowResults.formData) names.push(...Object.keys(flowResults.formData));
        if (flowResults.inboundEmailData) names.push(...Object.keys(flowResults.inboundEmailData));
        if (flowResults.apiResponses) names.push(...Object.keys(flowResults.apiResponses));
        if (flowResults.calculations) names.push(...Object.keys(flowResults.calculations));
        if (flowResults.aiResponses) names.push(...Object.keys(flowResults.aiResponses));

        // Add display names
        for (const result of Object.values(flowResults.nodeResults || {})) {
          names.push((result as any).displayName);
        }

        // Convert Set to Array to avoid iteration issues
        const uniqueNames = new Set(names);
        const uniqueArray: string[] = [];
        uniqueNames.forEach(name => uniqueArray.push(name));
        return uniqueArray.sort();
      },
       // Get field by name - checks variables, flowResults, and input nodes
      getByFieldName: (fieldName: any) => {
        console.log('🔍 dataFlow.getByFieldName() called for:', fieldName);
        
        // First check variables (for Telegram inbound, email inbound, etc.)
        if (flowResults.variables && flowResults.variables[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.variables:', flowResults.variables[fieldName]);
          return flowResults.variables[fieldName];
        }
        
        // Check top-level flowResults
        if (flowResults[fieldName] !== undefined) {
          console.log('✅ Found in flowResults top-level:', flowResults[fieldName]);
          return flowResults[fieldName];
        }
        
        // Check window.dataFlow (for Telegram inbound data stored globally)
        if (typeof window !== 'undefined' && window.dataFlow && window.dataFlow[fieldName] !== undefined) {
          console.log('✅ Found in window.dataFlow:', window.dataFlow[fieldName]);
          return window.dataFlow[fieldName];
        }
        
        // Check inputs collection
        if (flowResults.inputs && flowResults.inputs[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inputs:', flowResults.inputs[fieldName]);
          return flowResults.inputs[fieldName];
        }
        
        // Check formData
        if (flowResults.formData && flowResults.formData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.formData:', flowResults.formData[fieldName]);
          return flowResults.formData[fieldName];
        }
        
        // Check inboundEmailData
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inboundEmailData:', flowResults.inboundEmailData[fieldName]);
          return flowResults.inboundEmailData[fieldName];
        }
        
        // Fallback: Search for input nodes (existing behavior)
        if (flowResults.nodeResults) {
          for (const [nodeId, nodeResult] of Object.entries(flowResults.nodeResults)) {
            if ((nodeResult as any).nodeType === 'input') {
              const inputData = (nodeResult as any).data;
              
              // Check inputName from config
              if (inputData && typeof inputData === 'object') {
                const inputName = inputData.inputName || inputData.name || inputData.fieldName;
                if (inputName && inputName.toLowerCase() === String(fieldName).toLowerCase()) {
                  if (inputData.inputHandler) {
                    try {
                      const currentValue = inputData.inputHandler.get();
                      console.log('✅ Found in input node:', currentValue);
                      return currentValue;
                    } catch (error) {
                      console.warn('[WARNING] Error getting input value:', error);
                    }
                  }
                }
              }
            }
          }
        }
        
        console.warn('⚠️ Field not found:', fieldName);
        return undefined;
      }
    
    };

    // Make dataFlow available globally for this execution
    if (typeof window !== 'undefined') {
      (window as any).dataFlow = dataFlow;
      const existingDataFlow = (window as any).dataFlow || {};
      // Merge existing data with new dataFlow methods
      (window as any).dataFlow = {
        ...existingDataFlow,  // Preserve existing data (video-gen, image-gen results)
        ...dataFlow            // Add new dataFlow methods (getByNodeId, current, previous, etc.)
      };
      (window as any).getPreviousResult = dataFlow.previous;
      (window as any).getFlowResult = dataFlow.get;
      (window as any).getAllFlowResults = dataFlow.getAvailableNames;
    }
    
    // SECURITY: Store sanitized chain data for field resolution
    flowResults.originalChainData = {"id":"flow_inbound-email-1763097045884_1766551025527","nodes":[{"id":"inbound-email-1763097045884","style":{"padding":"0","borderColor":"#2563eb","borderWidth":"2px","borderRadius":"8px"},"width":483,"config":{"host":"","port":993,"folder":"INBOX","useSSL":true,"password":"","username":"","bodyFilter":"","fromFilter":"","markAsRead":false,"emailMethod":"webhook","credentialId":"013df1cf-5605-4698-ac1b-58e696b8b41c","customDomain":"","forwardEmail":"","checkInterval":30,"subjectFilter":"","includeHeaders":false,"webhookProvider":"sendgrid","extractAttachments":false,"integrationService":"zapier"},"metadata":{"name":"inbound-email Node","label":"Inbound Email","description":""},"nodeType":"inbound-email","position":{"x":148.82537247637293,"y":-182.56462486550328}},{"id":"openaiAgentSDKNode-1763118348594","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Main Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"orchestrator","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"tool_call","instructions":"You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":true,"handoff_targets":[{"agent_label":"Promotion","agent_node_id":"openaiAgentSDKNode-1763097052561","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Promotion for specialized assistance"},{"agent_label":"Personal","agent_node_id":"openaiAgentSDKNode-1763179222370","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Personal for specialized assistance"},{"agent_label":"Important","agent_node_id":"openaiAgentSDKNode-1763190181978","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Important for specialized assistance"}],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Main Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":815.3358474237264,"y":-207.74874349492552}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"inbound-email-1763097045884","style":{"padding":"0","borderColor":"#2563eb","borderWidth":"2px","borderRadius":"8px"},"width":483,"config":{"host":"","port":993,"folder":"INBOX","useSSL":true,"password":"","username":"","bodyFilter":"","fromFilter":"","markAsRead":false,"emailMethod":"webhook","credentialId":"013df1cf-5605-4698-ac1b-58e696b8b41c","customDomain":"","forwardEmail":"","checkInterval":30,"subjectFilter":"","includeHeaders":false,"webhookProvider":"sendgrid","extractAttachments":false,"integrationService":"zapier"},"metadata":{"name":"inbound-email Node","label":"Inbound Email","description":""},"nodeType":"inbound-email","position":{"x":148.82537247637293,"y":-182.56462486550328}},"endNode":{"id":"openaiAgentSDKNode-1763118348594","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Main Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"orchestrator","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"tool_call","instructions":"You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":true,"handoff_targets":[{"agent_label":"Promotion","agent_node_id":"openaiAgentSDKNode-1763097052561","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Promotion for specialized assistance"},{"agent_label":"Personal","agent_node_id":"openaiAgentSDKNode-1763179222370","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Personal for specialized assistance"},{"agent_label":"Important","agent_node_id":"openaiAgentSDKNode-1763190181978","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Important for specialized assistance"}],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Main Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":815.3358474237264,"y":-207.74874349492552}}};

    // Declare all step result variables
    let step1Result: any;
    let step2Result: any;



    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};
    
    // Store original chain data for field resolution
    flowResults.originalChainData = {"id":"flow_inbound-email-1763097045884_1766551025527","nodes":[{"id":"inbound-email-1763097045884","style":{"padding":"0","borderColor":"#2563eb","borderWidth":"2px","borderRadius":"8px"},"width":483,"config":{"host":"","port":993,"folder":"INBOX","useSSL":true,"password":"","username":"","bodyFilter":"","fromFilter":"","markAsRead":false,"emailMethod":"webhook","credentialId":"013df1cf-5605-4698-ac1b-58e696b8b41c","customDomain":"","forwardEmail":"","checkInterval":30,"subjectFilter":"","includeHeaders":false,"webhookProvider":"sendgrid","extractAttachments":false,"integrationService":"zapier"},"metadata":{"name":"inbound-email Node","label":"Inbound Email","description":""},"nodeType":"inbound-email","position":{"x":148.82537247637293,"y":-182.56462486550328}},{"id":"openaiAgentSDKNode-1763118348594","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Main Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"orchestrator","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"tool_call","instructions":"You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":true,"handoff_targets":[{"agent_label":"Promotion","agent_node_id":"openaiAgentSDKNode-1763097052561","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Promotion for specialized assistance"},{"agent_label":"Personal","agent_node_id":"openaiAgentSDKNode-1763179222370","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Personal for specialized assistance"},{"agent_label":"Important","agent_node_id":"openaiAgentSDKNode-1763190181978","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Important for specialized assistance"}],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Main Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":815.3358474237264,"y":-207.74874349492552}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"inbound-email-1763097045884","style":{"padding":"0","borderColor":"#2563eb","borderWidth":"2px","borderRadius":"8px"},"width":483,"config":{"host":"","port":993,"folder":"INBOX","useSSL":true,"password":"","username":"","bodyFilter":"","fromFilter":"","markAsRead":false,"emailMethod":"webhook","credentialId":"013df1cf-5605-4698-ac1b-58e696b8b41c","customDomain":"","forwardEmail":"","checkInterval":30,"subjectFilter":"","includeHeaders":false,"webhookProvider":"sendgrid","extractAttachments":false,"integrationService":"zapier"},"metadata":{"name":"inbound-email Node","label":"Inbound Email","description":""},"nodeType":"inbound-email","position":{"x":148.82537247637293,"y":-182.56462486550328}},"endNode":{"id":"openaiAgentSDKNode-1763118348594","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Main Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"orchestrator","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"tool_call","instructions":"You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":true,"handoff_targets":[{"agent_label":"Promotion","agent_node_id":"openaiAgentSDKNode-1763097052561","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Promotion for specialized assistance"},{"agent_label":"Personal","agent_node_id":"openaiAgentSDKNode-1763179222370","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Personal for specialized assistance"},{"agent_label":"Important","agent_node_id":"openaiAgentSDKNode-1763190181978","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Important for specialized assistance"}],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Main Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":815.3358474237264,"y":-207.74874349492552}}};
    
    // === WORKFLOW NODES: Make workflow nodes globally accessible for processors ===
    if (typeof window !== 'undefined') {
      // SECURITY: Store SANITIZED workflow nodes in window context (remove API keys)
      // Sanitize each node individually to ensure all sensitive data is removed
      const sanitizedNodes = [{"id":"inbound-email-1763097045884","style":{"padding":"0","borderColor":"#2563eb","borderWidth":"2px","borderRadius":"8px"},"width":483,"config":{"host":"","port":993,"folder":"INBOX","useSSL":true,"password":"","username":"","bodyFilter":"","fromFilter":"","markAsRead":false,"emailMethod":"webhook","credentialId":"013df1cf-5605-4698-ac1b-58e696b8b41c","customDomain":"","forwardEmail":"","checkInterval":30,"subjectFilter":"","includeHeaders":false,"webhookProvider":"sendgrid","extractAttachments":false,"integrationService":"zapier"},"metadata":{"name":"inbound-email Node","label":"Inbound Email","description":""},"nodeType":"inbound-email","position":{"x":148.82537247637293,"y":-182.56462486550328}},{"id":"openaiAgentSDKNode-1763118348594","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Main Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"orchestrator","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"tool_call","instructions":"You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":true,"handoff_targets":[{"agent_label":"Promotion","agent_node_id":"openaiAgentSDKNode-1763097052561","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Promotion for specialized assistance"},{"agent_label":"Personal","agent_node_id":"openaiAgentSDKNode-1763179222370","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Personal for specialized assistance"},{"agent_label":"Important","agent_node_id":"openaiAgentSDKNode-1763190181978","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Important for specialized assistance"}],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Main Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":815.3358474237264,"y":-207.74874349492552}}];
      
      window.__currentWorkflowNodes = sanitizedNodes;
      window.__flowChainMetadata = {
        chainId: 'flow_inbound-email-1763097045884_1766551025527',
        currentChainNodes: sanitizedNodes,
        nodeCount: 2
      };
      console.log('🔗 Workflow nodes made available globally: 2 nodes');
    }
    
    // === CRITICAL: Import cross-chain data for data access ===
    // This allows the separate chain to access data from the main chain
    if (initialData.crossChainNodeResults) {
      console.log('🔗 Importing cross-chain node results for data access');
      flowResults.nodeResults = { ...flowResults.nodeResults, ...initialData.crossChainNodeResults };
      console.log('📋 Imported node results:', Object.keys(initialData.crossChainNodeResults));
    }
    if (initialData.crossChainFormData) {
      console.log('🔗 Importing cross-chain form data');
      flowResults.formData = { ...flowResults.formData, ...initialData.crossChainFormData };
      // Also make form fields accessible at top level
      Object.entries(initialData.crossChainFormData).forEach(([key, value]) => {
        flowResults[key] = value;
      });
      console.log('📋 Imported form data:', Object.keys(initialData.crossChainFormData));
    }
    if (initialData.crossChainVariables) {
      flowResults.variables = { ...flowResults.variables, ...initialData.crossChainVariables };
    }
    if (initialData.crossChainApiResponses) {
      flowResults.apiResponses = { ...flowResults.apiResponses, ...initialData.crossChainApiResponses };
    }
    if (initialData.crossChainAiResponses) {
      flowResults.aiResponses = { ...flowResults.aiResponses, ...initialData.crossChainAiResponses };
    }
    if (initialData.crossChainInputs) {
      flowResults.inputs = { ...flowResults.inputs, ...initialData.crossChainInputs };
    }
    if (initialData.crossChainCalculations) {
      flowResults.calculations = { ...flowResults.calculations, ...initialData.crossChainCalculations };
    }
    
    // === ENHANCED: Import inherited data structure ===
    if (initialData.inheritedData) {
      console.log('🔗 Importing inherited data structure');
      const inherited = initialData.inheritedData;
      
      // Merge all inherited collections
      if (inherited.nodeResults) {
        flowResults.nodeResults = { ...flowResults.nodeResults, ...inherited.nodeResults };
        console.log('📋 Inherited nodeResults:', Object.keys(inherited.nodeResults));
      }
      if (inherited.formData) {
        flowResults.formData = { ...flowResults.formData, ...inherited.formData };
        // Make form fields accessible at top level
        Object.entries(inherited.formData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      if (inherited.variables) flowResults.variables = { ...flowResults.variables, ...inherited.variables };
      if (inherited.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...inherited.apiResponses };
      if (inherited.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...inherited.aiResponses };
      if (inherited.inputs) flowResults.inputs = { ...flowResults.inputs, ...inherited.inputs };
      if (inherited.calculations) flowResults.calculations = { ...flowResults.calculations, ...inherited.calculations };
      
      // Set current and previous results from inherited data
      if (inherited.currentResult !== undefined) {
        flowResults.currentResult = inherited.currentResult;
        currentResult = inherited.currentResult;
        console.log('📋 Using inherited currentResult:', currentResult);
      }
      if (inherited.previousResult !== undefined) {
        flowResults.previousResult = inherited.previousResult;
      }
    }
    
    // === FALLBACK: Check global cross-chain data ===
    if (typeof window !== 'undefined') {
      // Check for globally stored cross-chain data
      if (window.mainChainFlowResults) {
        console.log('🌐 Found global main chain data, importing...');
        const mainChain = window.mainChainFlowResults;
        
        // CRITICAL FIX: Do NOT import nodeResults from previous executions
        // nodeResults is execution-specific and should be fresh for each run
        // Only import persistent data like formData, variables, etc.
        // if (mainChain.nodeResults && Object.keys(mainChain.nodeResults).length > 0) {
        //   flowResults.nodeResults = { ...flowResults.nodeResults, ...mainChain.nodeResults };
        //   console.log('📋 Imported global nodeResults:', Object.keys(mainChain.nodeResults));
        // }
        if (mainChain.formData && Object.keys(mainChain.formData).length > 0) {
          flowResults.formData = { ...flowResults.formData, ...mainChain.formData };
          Object.entries(mainChain.formData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
          console.log('📋 Imported global formData:', Object.keys(mainChain.formData));
        }
        if (mainChain.variables) flowResults.variables = { ...flowResults.variables, ...mainChain.variables };
        if (mainChain.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...mainChain.apiResponses };
        if (mainChain.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...mainChain.aiResponses };
        
        // Use router data if current result is not set
        if (!currentResult && mainChain.routerData) {
          currentResult = mainChain.routerData;
          flowResults.currentResult = mainChain.routerData;
          console.log('📋 Using global router data as currentResult');
        }
      }
    }
    
    console.log('📊 Final flowResults after cross-chain import:', {
      nodeResults: Object.keys(flowResults.nodeResults || {}),
      formData: Object.keys(flowResults.formData || {}),
      variables: Object.keys(flowResults.variables || {}),
      currentResult: !!currentResult
    });
    
    // Process form data if provided in the initial data
    // This ensures form fields are properly extracted and normalized
    if (initialData && typeof initialData === 'object') {
      // Check if we have form data in a nested property
      if (initialData.formData && typeof initialData.formData === 'object') {
        flowResults.formData = { ...initialData.formData };
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(initialData.formData).forEach(([key, value]) => {
          if (!key.startsWith('_')) {
            flowResults[key] = value;
          }
        });
        
        console.log('📝 Extracted form data from initialData.formData:', flowResults.formData);
      }
      
      // Check for form-like data at the top level
            const topLevelFormData: Record<string, any> = {};
      let hasFormFields = false;
      
      Object.entries(initialData).forEach(([key, value]) => {
        // Skip metadata and special properties
        if (!key.startsWith('_') && 
            key !== 'buttonId' && 
            key !== 'formId' && 
            key !== 'trigger' &&
            key !== 'clickTimestamp' &&
            key !== 'timestamp') {
          
          // Only include simple values that look like form fields
          if (typeof value === 'string' || 
              typeof value === 'number' || 
              typeof value === 'boolean') {
            topLevelFormData[key] = value;
            hasFormFields = true;
          }
        }
      });
      
      if (hasFormFields) {
        // Store in formData if not already set
        if (!flowResults.formData || Object.keys(flowResults.formData).length === 0) {
          flowResults.formData = topLevelFormData;
          console.log('📝 Extracted form-like data from top level:', topLevelFormData);
        }
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(topLevelFormData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      
      // Process inbound email data if provided in the initial data
      // This ensures email fields like subject, from, text are properly extracted and normalized
      if (initialData.subject || initialData.from || initialData.text || initialData.emailData) {
        console.log('📧 Processing inbound email data from initialData...');
        
        // Check if we have email data in a nested property
        if (initialData.emailData && typeof initialData.emailData === 'object') {
          flowResults.inboundEmailData = { ...initialData.emailData };
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(initialData.emailData).forEach(([key, value]) => {
            if (!key.startsWith('_')) {
              flowResults[key] = value;
            }
          });
          
          console.log('📧 Extracted email data from initialData.emailData:', flowResults.inboundEmailData);
        }
        
        // Check for email-like data at the top level
        const topLevelEmailData: Record<string, any> = {};
        let hasEmailFields = false;
        
        // Common email field names to look for
        const emailFields = ['subject', 'from', 'to', 'text', 'body', 'html', 'sender', 'recipient', 'message_id', 'timestamp'];
        
        Object.entries(initialData).forEach(([key, value]) => {
          // Check if this is an email field (case-insensitive)
          const isEmailField = emailFields.some(field => 
            key.toLowerCase() === field.toLowerCase() || 
            key.toLowerCase().includes(field.toLowerCase())
          );
          
          if (isEmailField && value !== undefined && value !== null) {
            topLevelEmailData[key] = value;
            hasEmailFields = true;
          }
        });
        
        if (hasEmailFields) {
          // Store in inboundEmailData if not already set
          if (!flowResults.inboundEmailData || Object.keys(flowResults.inboundEmailData).length === 0) {
            flowResults.inboundEmailData = topLevelEmailData;
            console.log('📧 Extracted email-like data from top level:', topLevelEmailData);
          }
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(topLevelEmailData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
        }
      }
    }
    
    // === STEP 1: INBOUND-EMAIL ===
    console.log('🔄 Executing step 1: inbound-email (inbound-email-1763097045884)');
    step1Result = currentResult; // Assign to pre-declared variable
    try {
      
      // ===== ENHANCED IMAP EMAIL MONITORING WITH CONTINUOUS SUPPORT =====
   
      
      // Get IMAP settings dynamically from environment variables or workflow data
      const getImapSettings = () => {
        // Try to get settings from current workflow data
        const currentStep = window.currentWorkflowStep || {};
        const nodeData = currentStep.data || currentStep || {};
        const nodeSettings = nodeData.settings || nodeData.data?.settings || {};
        
       
        
        // Use environment variables as primary source, fallback to node settings
        return {
          host: process.env.NEXT_PUBLIC_INBOUND_EMAIL_IMAP_HOST || nodeSettings.host || '',
          port: process.env.NEXT_PUBLIC_INBOUND_EMAIL_IMAP_PORT || nodeSettings.port || 993,
          username: process.env.NEXT_PUBLIC_INBOUND_EMAIL_USERNAME || nodeSettings.username || '',
          password: process.env.NEXT_PUBLIC_INBOUND_EMAIL_PASSWORD || nodeSettings.password || '',
          useSSL: nodeSettings.useSSL !== false,
          folder: nodeSettings.folder || 'INBOX',
          checkInterval: nodeSettings.checkInterval || 30,
          markAsRead: nodeSettings.markAsRead || false,
          maxWaitTime: nodeSettings.maxWaitTime || 300,
          continuousMonitoring: nodeSettings.continuousMonitoring !== false,
          nodeId: 'inbound-email-1763097045884',
          fromFilter: nodeSettings.fromFilter || '',
          subjectFilter: nodeSettings.subjectFilter || '',
          bodyFilter: nodeSettings.bodyFilter || '',
          filters: {
            fromFilter: nodeSettings.fromFilter || '',
            subjectFilter: nodeSettings.subjectFilter || '',
            bodyFilter: nodeSettings.bodyFilter || ''
          }
        };
      };
      
      const imapConfig = getImapSettings();
      
      // Store config globally for helper functions
      window.currentImapConfig = imapConfig;
      window.currentImapConfig.fromFilter = imapConfig.fromFilter || imapConfig.filters?.fromFilter || '';
      window.currentImapConfig.subjectFilter = imapConfig.subjectFilter || imapConfig.filters?.subjectFilter || '';
      window.currentImapConfig.bodyFilter = imapConfig.bodyFilter || imapConfig.filters?.bodyFilter || '';
      
      // Define enhanced IMAP helper functions
      if (!window.processImapEmailData) {
        window.processImapEmailData = function(imapData: Record<string, any>): Record<string, any> {
          const config = window.currentImapConfig || {};
          
          // Helper function to safely process email text content
          const safeDecodeText = (text: unknown): string => {
            if (!text) return '';
            
            // If it's already a string, ensure it's properly handled
            if (typeof text === 'string') {
              try {
                // Replace any problematic characters that might cause encoding issues
                return text
                  .replace(/\xa0/g, ' ')  // Replace non-breaking space
                  .replace(/\u00a0/g, ' ') // Replace unicode non-breaking space
                  .replace(/[\x80-\xff]/g, '?') // Replace any other problematic bytes
                  .trim();
              } catch (e) {
                console.warn('Text processing error:', e);
                return String(text).replace(/[^\x00-\x7F]/g, '?'); // ASCII only fallback
              }
            }
            
            // If it's bytes or other format, convert safely
            try {
              return String(text).replace(/[^\x00-\x7F]/g, '?');
            } catch (e) {
              console.warn('Text conversion error:', e);
              return '';
            }
          };
          
          return {
            id: imapData.id || 'imap-email-' + Date.now(),
            timestamp: imapData.timestamp || new Date().toISOString(),
            provider: 'imap',
            host: config.host || 'unknown',
            folder: config.folder || 'INBOX',
            from: safeDecodeText(imapData.from),
            to: safeDecodeText(imapData.to),
            subject: safeDecodeText(imapData.subject),
            text: safeDecodeText(imapData.body_text || imapData.text),
            html: safeDecodeText(imapData.body_html || imapData.html),
            attachments: imapData.attachments || [],
            headers: imapData.headers || {},
            rawData: imapData
          };
        };
      }
      
      if (!window.applyEmailFilters) {
        window.applyEmailFilters = function(emailData: Record<string, any>, filters: Record<string, any>) {


          // Initialize email statistics tracking
          window.emailStats = window.emailStats || { totalReceived: 0, filtered: 0, processed: 0 };
          window.emailStats.totalReceived++;

          // Check if the from filter is actually configured (not just empty strings)
          // According to requirements: "If any emails are present in filter option in inbound email node then inbound only from those emails"
          // This specifically refers to the fromFilter field
          const effectiveFilters = {
            fromFilter: (filters && filters.fromFilter) || window.currentImapConfig?.fromFilter || '',
            subjectFilter: (filters && filters.subjectFilter) || window.currentImapConfig?.subjectFilter || '',
            bodyFilter: (filters && filters.bodyFilter) || window.currentImapConfig?.bodyFilter || ''
          };
          
          const fromFilterValue = effectiveFilters.fromFilter;
          const subjectFilterValue = effectiveFilters.subjectFilter;
          const bodyFilterValue = effectiveFilters.bodyFilter;

          const hasFromFilter = fromFilterValue.trim().length > 0;
          const hasSubjectFilter = subjectFilterValue.trim().length > 0;
          const hasBodyFilter = bodyFilterValue.trim().length > 0;

          // If no filters are configured, allow all emails
          if (!hasFromFilter && !hasSubjectFilter && !hasBodyFilter) {
            window.emailStats.processed++;
            return true;
          }

          // Helper functions for sender/subject filtering
          const extractEmailVariants = (text: string | undefined): string[] => {
            if (!text) return [];
            const lower = text.toLowerCase().trim();
            const variants = [lower];
            const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,}/gi;
            const emails = lower.match(emailRegex);
            if (emails) {
              variants.push(...emails.map((addr) => addr.trim()));
            }
            return variants;
          };

          const parseFilterList = (value: string | undefined): string[] => {
            if (!value) return [];
            const results: string[] = [];
            let current = '';

            for (const char of value) {
              const isSeparator = char === ',' || char === ';' || char.trim() === '';
              if (isSeparator) {
                if (current.trim()) {
                  results.push(current.trim().toLowerCase());
                }
                current = '';
              } else {
                current += char;
              }
            }

            if (current.trim()) {
              results.push(current.trim().toLowerCase());
            }

            return results;
          };

          const wildcardMatch = (value: string, pattern: string): boolean => {
            let valueIndex = 0;
            let patternIndex = 0;
            let starIndex = -1;
            let matchIndex = 0;

            while (valueIndex < value.length) {
              if (
                patternIndex < pattern.length &&
                pattern[patternIndex] === value[valueIndex]
              ) {
                valueIndex++;
                patternIndex++;
              } else if (
                patternIndex < pattern.length &&
                pattern[patternIndex] === '*'
              ) {
                starIndex = patternIndex;
                matchIndex = valueIndex;
                patternIndex++;
              } else if (starIndex !== -1) {
                patternIndex = starIndex + 1;
                matchIndex++;
                valueIndex = matchIndex;
              } else {
                return false;
              }
            }

            while (patternIndex < pattern.length && pattern[patternIndex] === '*') {
              patternIndex++;
            }

            return patternIndex === pattern.length;
          };

          const matchesPattern = (variant: string, pattern: string, options?: { matchEmail?: boolean }): boolean => {
            if (!variant || !pattern) return false;

            const normalizedVariant = variant.toLowerCase();
            const normalizedPattern = pattern.toLowerCase();

            if (normalizedPattern.startsWith('@')) {
              return normalizedVariant.endsWith(normalizedPattern);
            }

            if (options?.matchEmail && normalizedPattern.includes('@') && !normalizedPattern.includes('*')) {
              return normalizedVariant === normalizedPattern;
            }

            if (normalizedPattern.includes('*')) {
              return wildcardMatch(normalizedVariant, normalizedPattern);
            }

            return normalizedVariant.includes(normalizedPattern);
          };

          const matchesFilter = (
            text: string | undefined,
            filterValue: string | undefined,
            options?: { matchEmail?: boolean }
          ): boolean => {
            if (!filterValue) return true;
            if (!text) return false;

            const patterns = parseFilterList(filterValue);
            if (patterns.length === 0) return true;

            const textVariants = options?.matchEmail
              ? extractEmailVariants(text)
              : [text.toLowerCase().trim()];

            return patterns.some((pattern: string) =>
              textVariants.some((variant: string) => matchesPattern(variant, pattern, options))
            );
          };

          // Apply FROM filter (if configured)
          if (hasFromFilter) {
            const senderPatterns = parseFilterList(fromFilterValue);
            if (senderPatterns.length > 0) {
              const fromVariants = extractEmailVariants(emailData.from);
              const fromMatches = senderPatterns.some((pattern: string) =>
                fromVariants.some((variant: string) => matchesPattern(variant, pattern, { matchEmail: true }))
              );

              if (!fromMatches) {
                window.emailStats.filtered++;
                return false;
              }
            }
          }

          // Apply subject filter (if configured)
          if (hasSubjectFilter) {
            const subjectMatches = matchesFilter(emailData.subject, subjectFilterValue);

            if (!subjectMatches) {
              window.emailStats.filtered++;
              return false;
            }
          }

          // Apply body filter (if configured)
          if (hasBodyFilter) {
            const bodyText = emailData.text || emailData.html || '';
            const bodyMatches = matchesFilter(bodyText, bodyFilterValue);

            if (!bodyMatches) {
              window.emailStats.filtered++;
              return false;
            }
          }

          window.emailStats.processed++;
          return true;
        };
      }
      
      if (!window.waitForEmailData) {
        window.waitForEmailData = async function(
          monitorId: string,
          maxWaitTime: number,
          backendUrl: string,
          continuousMode = false
        ): Promise<Record<string, any> | null> {
        
          
          const startTime = Date.now();
          const pollInterval = 2000; // Check every 2 seconds
          let pollCount = 0;
          
          while (Date.now() - startTime < maxWaitTime * 1000) {
            pollCount++;
            
            try {
              // Check for new email data
              const checkUrl = backendUrl + '/api/email/check-data/' + monitorId;
         
              
              const response = await fetch(checkUrl);
           
              
              if (response.ok) {
                const data = await response.json();
           
                
                if (data.email_data && data.email_data !== null) {
          
                  
                  const processedEmail = window.processImapEmailData(data.email_data);
                  
                  // Apply email filters before processing
                  const config = window.currentImapConfig || {};
                  const filters = config.filters || {};
                  
                  if (window.applyEmailFilters && !window.applyEmailFilters(processedEmail, filters)) {
                
                    
                    if (continuousMode) {
                      // Continue monitoring for next email without processing this one
         
                      await new Promise(resolve => setTimeout(resolve, pollInterval));
                      continue;
                    } else {
                      // In single email mode, continue waiting for a matching email
               
                      await new Promise(resolve => setTimeout(resolve, pollInterval));
                      continue;
                    }
                  }
                  
         
                  
                  if (continuousMode) {
                 
                    
                    // Store email for workflow processing
                    window.lastReceivedEmail = processedEmail;
                    window.latestEmailData = processedEmail;
                    
                    // Trigger workflow for this email but don't stop monitoring
                    if (window.triggerEmailWorkflow) {
                      try {
                        await window.triggerEmailWorkflow(processedEmail);
                      } catch (workflowError) {
                        console.error(' Error triggering workflow:', workflowError);
                      }
                    }
                    
                    // Continue monitoring for next email
         
                    await new Promise(resolve => setTimeout(resolve, pollInterval));
                    continue;
                  } else {
            
                    // Stop monitoring for single email mode
                    await fetch(backendUrl + '/api/email/stop-monitoring/' + monitorId, { method: 'POST' });
                    return processedEmail;
                  }
                } else {
              
                }
              } else {
                const errorText = await response.text();
                console.warn(' Poll #' + pollCount + ': Error response ' + response.status + ':', errorText);
              }
              
              // Wait before next check
              await new Promise(resolve => setTimeout(resolve, pollInterval));
              
            } catch (error: unknown) {
              console.warn(' Poll #' + pollCount + ': Error checking for email data:', getErrorMessage(error), error);
              await new Promise(resolve => setTimeout(resolve, pollInterval));
            }
          }
          
        
          
          if (continuousMode) {
          
            // In continuous mode, restart monitoring instead of stopping
            return await window.waitForEmailData(monitorId, maxWaitTime, backendUrl, continuousMode);
          } else {
            // Clean up monitoring for single email mode
            try {
              await fetch(backendUrl + '/api/email/stop-monitoring/' + monitorId, { method: 'POST' });
           
            } catch (e: unknown) {
              console.warn(' Failed to stop monitoring:', getErrorMessage(e), e);
            }
            return null;
          }
        };
      }
      
      if (!window.startImapMonitoring) {
        window.startImapMonitoring = async function(config: Record<string, any>) {
    
          
          try {
            // Call backend service to start monitoring
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8001';
          
            
            const response = await fetch(backendUrl + '/api/email/start-monitoring', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(config)
            });
            
      
            
            if (!response.ok) {
              const errorText = await response.text();
              console.error(' Backend error response:', errorText);
              throw new Error('Failed to start email monitoring service: ' + response.status + ' - ' + errorText);
            }
            
            const result = await response.json();
            const monitorId = result.monitor_id;
            

            
            // Store monitor ID globally for stopping later
            window.emailMonitorId = monitorId;
            window.emailMonitoringActive = true;
            
            // Poll for email data with timeout and continuous mode support
            return await window.waitForEmailData(
              monitorId,
              config.maxWaitTime || 300,
              backendUrl,
              config.continuousMonitoring
            );
            
          } catch (error: unknown) {
            const errorMessage = getErrorMessage(error);
            console.error(' Failed to start IMAP monitoring:', errorMessage, error);
            return null;
          }
        };
      }
      
      if (!window.startContinuousImapMonitoring) {
        window.startContinuousImapMonitoring = async function(config: Record<string, any>) {

          
          // Set continuous monitoring flag
          const continuousConfig = { ...config, continuousMonitoring: true };
          
          try {
            // Start monitoring in continuous mode
            await window.startImapMonitoring(continuousConfig);
   
            
          } catch (error: unknown) {
            console.error('  Failed to start continuous monitoring:', getErrorMessage(error), error);
            
            // Retry after a delay

            setTimeout(() => {
              window.startContinuousImapMonitoring(config);
            }, 30000);
          }
        };
      }
      
      if (!window.triggerEmailWorkflow) {
        window.triggerEmailWorkflow = async function(emailData: Record<string, any>) {

          
          try {
            // Apply email filters one more time to ensure only matching emails trigger workflows
            const config = window.currentImapConfig || {};
            const filters = config.filters || {};
            
            if (window.applyEmailFilters && !window.applyEmailFilters(emailData, filters)) {

              return;
            }
            
      
            
            // Store email data globally for workflow access
            if (typeof flowResults !== 'undefined') {
              // Store in inboundEmailData collection
              flowResults.inboundEmailData = flowResults.inboundEmailData || {};
              Object.assign(flowResults.inboundEmailData, emailData);
              
              // Store individual email fields at top level for template access
              if (emailData.subject) flowResults.subject = emailData.subject;
              if (emailData.from) flowResults.from = emailData.from;
              if (emailData.to) flowResults.to = emailData.to;
              if (emailData.text) flowResults.text = emailData.text;
              if (emailData.html) flowResults.html = emailData.html;
              if (emailData.sender) flowResults.sender = emailData.sender;
              if (emailData.recipient) flowResults.recipient = emailData.recipient;
              
              // Store in nodeResults for dataFlow.getByNodeId() access
              flowResults.nodeResults = flowResults.nodeResults || {};
              flowResults.nodeResults['inbound-email-1763097045884'] = {
                nodeType: 'inbound-email',
                data: emailData,
                stepNumber: Object.keys(flowResults.nodeResults).length + 1,
                displayName: 'inbound-email-1763097045884_email'
              };
            }
            
            // Execute the flow chain for this email using executeSpecificFlow
            if (typeof window !== 'undefined' && 
                typeof window.executeSpecificFlow === 'function' && 
                typeof window.getFlowChainInfo === 'function') {

              
              // Find the matching workflow for this inbound email trigger
              const flowChains = window.getFlowChainInfo();
              const matchingFlow = flowChains.find((chain: any) => 
                chain.startNode?.nodeType === 'inbound-email' ||
                chain.startNode?.id === 'inbound-email-1763097045884'
              );
              
              if (matchingFlow) {
      
                await window.executeSpecificFlow(matchingFlow.id, emailData);

              } else {
                console.warn('  No matching email workflow found');
              }
            } else {
              console.warn('  Flow integration functions not available on window');
            }
            
          } catch (error: unknown) {
            console.error('  Error executing workflow for email:', getErrorMessage(error), error);
          }
        };
      }
      
      if (!window.stopEmailMonitoring) {
        window.stopEmailMonitoring = async function(monitorId: string) {

          
          try {
            const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8001';
            await fetch(backendUrl + '/api/email/stop-monitoring/' + monitorId, { method: 'POST' });
            
            window.emailMonitoringActive = false;
            window.emailMonitorId = null;
            

          } catch (error: unknown) {
            console.error('  Failed to stop email monitoring:', getErrorMessage(error), error);
          }
        };
      }
      
      // Now execute the IMAP monitoring logic
      let step1Result = null;
      
      try {
        // Check if this is a trigger node that should auto-start monitoring
        const isTriggerNode = true;
        const continuousMode = true;
        

        
        // First check for existing email data
        const existingData = window.imapEmailData || window.inboundEmailData || window.lastReceivedEmail;
        
        if (existingData && Object.keys(existingData).length > 0) {
       
          step1Result = window.processImapEmailData(existingData);
        } else if (isTriggerNode) {
     
          
          if (continuousMode) {
    
            // Start continuous monitoring (non-blocking)
            window.startContinuousImapMonitoring(imapConfig);
            
            // For continuous mode, we don't wait for the first email
            // The workflow will be triggered each time an email arrives
            step1Result = {
              id: 'continuous-monitor-' + Date.now(),
              timestamp: new Date().toISOString(),
              provider: 'imap-continuous',
              status: 'monitoring',
              message: 'Continuous email monitoring started'
            };
          } else {
    
            // Auto-start monitoring for trigger nodes (single email mode)
            step1Result = await window.startImapMonitoring(imapConfig);
          }
        } else {
 
          
          // For intermediate nodes, only start if manually triggered
          // This preserves the current behavior for nodes triggered by buttons
          step1Result = await window.startImapMonitoring(imapConfig);
        }
        
      } catch (error: unknown) {
        console.error(' Error in IMAP email monitoring:', getErrorMessage(error), error);
        step1Result = null;
      }
      
      // Store IMAP email result in global flow system
      if (step1Result) {
        window.dataFlow = window.dataFlow || {};
        window.dataFlow.emailResult = step1Result;
        window.dataFlow['inbound-email-1763097045884'] = step1Result;
        
        // Store in global flowResults for cross-workflow access
        if (typeof flowResults !== 'undefined') {
          // Store in inboundEmailData collection
          flowResults.inboundEmailData = flowResults.inboundEmailData || {};
          Object.assign(flowResults.inboundEmailData, step1Result);
          
          // Also store individual email fields at top level for template access
          if (step1Result.subject) flowResults.subject = step1Result.subject;
          if (step1Result.from) flowResults.from = step1Result.from;
          if (step1Result.to) flowResults.to = step1Result.to;
          if (step1Result.text) flowResults.text = step1Result.text;
          if (step1Result.html) flowResults.html = step1Result.html;
          if (step1Result.sender) flowResults.sender = step1Result.sender;
          if (step1Result.recipient) flowResults.recipient = step1Result.recipient;
          
          // Store in nodeResults for dataFlow.getByNodeId() access
          flowResults.nodeResults = flowResults.nodeResults || {};
          flowResults.nodeResults['inbound-email-1763097045884'] = {
            nodeType: 'inbound-email',
            data: step1Result,
            stepNumber: Object.keys(flowResults.nodeResults).length + 1,
            displayName: 'inbound-email-1763097045884_email'
          };
          
    
        }
        

      } else {
        console.log(' No email received within timeout period or continuous monitoring started');
      }
    
      
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['inbound-email-1763097045884'] = {
      nodeId: 'inbound-email-1763097045884',
      nodeType: 'inbound-email',
      stepNumber: 1,
      displayName: 'inboundEmailResult',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    // No specialized storage for inbound-email
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['inboundEmailResult'] || typeof flowResults['inboundEmailResult'] === 'undefined') {
      flowResults['inboundEmailResult'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: inboundEmailResult (inbound-email) available as:');
    console.log('  - flowResults["inboundEmailResult"] // Direct access');
    console.log('  - dataFlow.get("inboundEmailResult")');
    console.log('  - dataFlow.getByNodeId("inbound-email-1763097045884")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
      
      // Update currentResult for next step - respect processor-specific currentResult if set
      if (flowResults.currentResult !== undefined && 
          flowResults.stepCounter > 0) {
        // Processor updated flowResults.currentResult, use that (e.g., HTTP processor sets responseData)
        currentResult = flowResults.currentResult;
        console.log('🔄 Using processor-specific currentResult for next step');
      } else {
        // Fallback to step result wrapper
        currentResult = step1Result;
        console.log('🔄 Using step result wrapper for next step');
      }
    } catch (stepError) {
      const stepErrorMessage = stepError instanceof Error ? stepError.message : String(stepError) || 'Unknown step error';
      console.error('❌ Error in step 1 (inbound-email):', stepError);
      flowErrors.push(`Step 1 (inbound-email): ${stepErrorMessage}`);
      
      // Set a default result for this step to avoid undefined references
      step1Result = { 
        error: true, 
        message: stepErrorMessage, 
        nodeType: 'inbound-email',
        nodeId: 'inbound-email-1763097045884',
        stepNumber: 1
      };
      
      currentResult = step1Result; // Update currentResult even on error
      
      // Store error result in enhanced data flow system
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['inbound-email-1763097045884'] = {
      nodeId: 'inbound-email-1763097045884',
      nodeType: 'inbound-email',
      stepNumber: 1,
      displayName: 'inboundEmailResult',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    // No specialized storage for inbound-email
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['inboundEmailResult'] || typeof flowResults['inboundEmailResult'] === 'undefined') {
      flowResults['inboundEmailResult'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: inboundEmailResult (inbound-email) available as:');
    console.log('  - flowResults["inboundEmailResult"] // Direct access');
    console.log('  - dataFlow.get("inboundEmailResult")');
    console.log('  - dataFlow.getByNodeId("inbound-email-1763097045884")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
    }

    // === STEP 2: OPENAIAGENTSDKNODE ===
    console.log('🔄 Executing step 2: openaiAgentSDKNode (You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n)');
    step2Result = currentResult; // Assign to pre-declared variable
    try {
      
    // Process with OpenAI Agent SDK (Single Input Mode)
    step2Result = '';
    
    // 🆕 EMBEDDED TARGET AGENT CONFIGURATIONS (for handoff)
    const targetAgentConfigs = {"openaiAgentSDKNode-1763097052561":{"id":"openaiAgentSDKNode-1763097052561","label":"Promotion Agent","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","model":"gpt-4","temperature":0.7,"max_tokens":1000,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentType":"agent_as_tool","selected_tools":[],"tool_configs":{},"tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}]},"openaiAgentSDKNode-1763179222370":{"id":"openaiAgentSDKNode-1763179222370","label":"Personal Agent","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","model":"gpt-4.1-2025-04-14","temperature":0.7,"max_tokens":1000,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentType":"agent_as_tool","selected_tools":[],"tool_configs":{},"tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}]},"openaiAgentSDKNode-1763190181978":{"id":"openaiAgentSDKNode-1763190181978","label":"Important Agent","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","model":"gpt-4","temperature":0.7,"max_tokens":1000,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentType":"agent_as_tool","selected_tools":[],"tool_configs":{},"tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}]}};
    
    try {
      // 🚫 CHECK: Skip if this node was already executed via handoff (CLIENT-SIDE ONLY)
      if (typeof window !== 'undefined' && window.__executedNodes && window.__executedNodes.has('openaiAgentSDKNode-1763118348594')) {
        console.log('⏭️ Skipping node (already executed via handoff):', 'openaiAgentSDKNode-1763118348594');
        
        // Get the result from dataFlow if available
        const existingResult = dataFlow.getByNodeId('openaiAgentSDKNode-1763118348594');
        if (existingResult) {
          step2Result = existingResult;
        } else {
          step2Result = 'Node already executed via handoff';
        }
        
        // Remove from executed set for next workflow run (CLIENT-SIDE ONLY)
        if (typeof window !== 'undefined' && window.__executedNodes) {
          window.__executedNodes.delete('openaiAgentSDKNode-1763118348594');
        }
      } else {
      let aiInput = '';
      
      
      // Single input processing (existing logic - UNCHANGED)
      
        // User has provided a custom prompt - use it and evaluate any dataFlow expressions
        let userPrompt = `{{from}}
{{subject}}
{{text}}`;
        const templateContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: cleanedInitialData,
          previousResult: flowResults.previousResult,
          // 🔧 Enhanced template variable access (like Evolution Send node)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          // 🔧 Enhanced template variable access - ALL variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🔧 Fix [object Object] issue - Convert ANY object template variables to readable strings
        userPrompt = userPrompt.replace(/{{(w+)}}/g, (match, varName) => {
          const value = templateContext[varName];
          if (value && typeof value === 'object' && !varName.includes('.') && !varName.includes('(')) {
            return JSON.stringify(value, null, 2);
          }
          return match; // Let template engine handle complex expressions
        });
        
        try {
          if (userPrompt.includes('{{') && userPrompt.includes('}}')) {
            const templateResult = TemplateExpressionEngine.processTemplate(userPrompt, templateContext);
            aiInput = String(templateResult);
          } else if (userPrompt.includes('dataFlow.')) {
            const evaluatedResult = TemplateExpressionEngine.evaluate(userPrompt, templateContext, { allowFunctions: true });
            aiInput = (evaluatedResult !== undefined && evaluatedResult !== null) ? evaluatedResult : userPrompt;
          } else {
            aiInput = userPrompt;
          }
        } catch (templateError) {
          aiInput = userPrompt;
        }
      
    
      
      // Ensure aiInput is a string and not empty
      if (typeof aiInput !== 'string') {
        aiInput = JSON.stringify(aiInput, null, 2);
      }
      
      if (!aiInput || aiInput.trim() === '') {
        aiInput = 'Please provide assistance.';
      }
        
        // 📚 RETRIEVE AGENT MEMORY (if enabled)
        let memoryMessages = [];
        if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
          try {
            const agentId = 'agent-1766551025536';
            const userId = 'user-1766551025536';
            const memoryStorageType = 'simple';
            
            if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
                memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
                memoryStorageType === 'longterm_vector') {
              // Supabase/PostgreSQL memory retrieval
              try {
                const memoryResponse = await fetch('/api/memory', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    operation: 'retrieve',
                    user_id: userId,
                    agent_id: agentId,
                    memory_type: memoryStorageType,
                    limit: 10
                  })
                });
                
                if (memoryResponse.ok) {
                  const memoryData = await memoryResponse.json();
                  if (memoryData.success && memoryData.data && Array.isArray(memoryData.data)) {
                    memoryMessages = memoryData.data.flatMap(item => {
                      const messages = [];
                      if (item.input_data) {
                        messages.push({
                          role: item.input_data.role || 'user',
                          content: item.input_data.content
                        });
                      }
                      if (item.output_data) {
                        messages.push({
                          role: item.output_data.role || 'assistant',
                          content: item.output_data.content
                        });
                      }
                      return messages;
                    });
                  }
                }
              } catch (supabaseError) {
                console.error('❌ Memory retrieval error:', supabaseError);
              }
            } else {
              // Browser storage memory retrieval
              const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
              const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
              
              const storedMemory = storage.getItem(memoryStorageKey);
              if (storedMemory) {
                const conversations = JSON.parse(storedMemory);
                const recentConversations = conversations.slice(-10);
                memoryMessages = recentConversations.map(conv => ({
                  role: conv.role,
                  content: conv.content
                }));
              }
            }
          } catch (memoryError) {
            console.error('❌ Failed to retrieve memory:', memoryError);
          }
        }
        
        // Define mediaCheckContext for media content checking (renamed to avoid global templateContext conflict)
        const mediaCheckContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: flowResults.currentResult,
          previousResult: flowResults.previousResult,
          // Enhanced template variable access (like Image Gen and Smart Agent nodes)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          smartAgentResult: flowResults.variables?.smartAgentResult || {},
          // All variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🆕 Check for media content to send to AI
        let hasMediaContent = false;
        let mediaContent = null;
        
        // Check for media in evolutionReceiveResult
        if (mediaCheckContext.evolutionReceiveResult?.mediaBase64 && mediaCheckContext.evolutionReceiveResult?.mimeType) {
          const mimeType = mediaCheckContext.evolutionReceiveResult.mimeType;
          if (mimeType.startsWith('image/')) {
            hasMediaContent = true;
            mediaContent = {
              type: 'image',
              mimeType: mimeType,
              base64: mediaCheckContext.evolutionReceiveResult.mediaBase64,
              dataUrl: mediaCheckContext.evolutionReceiveResult.mediaDataUrl
            };
          }
        }
        
        // SECURITY: Load API key from environment variables instead of embedding it
      let effectiveApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';
      
      // If using stored credential, fetch from backend
      if (false && 'f8d21d16-cb2d-4319-bf3b-4f5a729e8874') {
        try {
          const credentialResponse = await fetch(`${process.env.NEXT_PUBLIC_SIMPLITA_BACKEND_URL || 'http://localhost:8000'}/api/credentials/${encodeURIComponent('f8d21d16-cb2d-4319-bf3b-4f5a729e8874')}/data`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${process.env.SIMPLITA_API_TOKEN || 'generated-app-token'}`,
              'X-User-ID': process.env.SIMPLITA_USER_ID || 'anonymous'
            }
          });

          if (credentialResponse.ok) {
            const credentialData = await credentialResponse.json();
            if (credentialData && credentialData.api_key) {
              effectiveApiKey = credentialData.api_key;
            }
          }
        } catch (credError) {
          console.error('❌ OpenAI SDK: Error retrieving stored credential:', credError);
        }
      }
      
      // 🔧 Use absolute URL for server-side compatibility
      const apiUrl = typeof window !== 'undefined' ? '/api/openai-agent-sdk' : `${process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/api/openai-agent-sdk`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: aiInput,
         user_prompt: `{{from}}
{{subject}}
{{text}}`,

          model: 'gpt-4',
          instructions: `You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. 
You must NOT answer or classify the email yourself.

ROUTING RULES:

1. If the content clearly relates to **promotion emails**, such as:
   - offers, discounts, coupons, deals, cashback,
   - commercial or marketing messages,
   - brand newsletters or campaign mails,
   - ecommerce offers or product promotions,
   Route to: Promotion Agent

2. If the content clearly relates to **personal emails**, such as:
   - informal, friendly, emotional, casual tone,
   - friends, family, personal contacts,
   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,
   Route to: Personal Agent

3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:
   - company communication, client emails, organization notices,
   - HR, admin, operations, team updates,
   - formal tone, business context, office tasks,
   Route to: Important Agent

IF NONE of the above categories match:
Respond with:
“No specific keywords are matched. Please use appropriate keywords.”
`,
          temperature: 0.7,
          max_tokens: 1000,
          apiKey: effectiveApiKey,
          agentType: 'orchestrator',
          selected_tools: [],
          tool_configs: {},
          tool_settings: {"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},
          mcp_servers: [],
          handoff_enabled: true,
          handoff_targets: [{"agent_label":"Promotion","agent_node_id":"openaiAgentSDKNode-1763097052561","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Promotion for specialized assistance"},{"agent_label":"Personal","agent_node_id":"openaiAgentSDKNode-1763179222370","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Personal for specialized assistance"},{"agent_label":"Important","agent_node_id":"openaiAgentSDKNode-1763190181978","agent_description":"OpenAI Agent SDK application","handoff_instructions":"Transfer to Important for specialized assistance"}],
          // 📚 Include memory context if available
          memoryMessages: memoryMessages,
          enableMemory: false,
          memoryType: 'simple'
        })
      });
      
      if (!response.ok) {
        throw new Error('OpenAI Agent SDK API error: ' + response.status + ' - ' + response.statusText);
      }
      
      const result = await response.json();
      
      // ✅ AUTO-HANDOFF: Detect next directly connected agent (CLIENT-SIDE ONLY)
      if (false && !result.handoff && typeof window !== 'undefined') {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763118348594');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'tool_call';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // 📚 STORE AGENT MEMORY (if enabled and response contains data)
      if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
        try {
          const agentId = 'agent-1766551025536';
          const userId = 'user-1766551025536';
          const sessionId = 'session-1766551025536';
          const memoryStorageType = 'simple';
          
          const conversationData = {
            user_message: { role: 'user', content: aiInput },
            assistant_message: { role: 'assistant', content: result.content || result.text || result.message || '' }
          };
          
          if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
              memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
              memoryStorageType === 'longterm_vector') {
            // Supabase/PostgreSQL memory storage
            try {
              const memoryStoreResponse = await fetch('/api/memory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  operation: 'store',
                  user_id: userId,
                  agent_id: agentId,
                  session_id: sessionId,
                  memory_type: memoryStorageType,
                  interaction_type: 'conversation',
                  input_data: conversationData.user_message,
                  output_data: conversationData.assistant_message,
                  metadata: {
                    model: 'gpt-4',
                    agentType: 'agent_as_tool',
                    timestamp: new Date().toISOString()
                  }
                })
              });
              
              if (!memoryStoreResponse.ok) {
                console.warn('⚠️ Failed to store memory in Supabase:', memoryStoreResponse.status);
              }
            } catch (supabaseStoreError) {
              console.error('❌ Supabase memory storage error:', supabaseStoreError);
            }
          } else {
            // Browser storage memory
            const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
            const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
            
            const existingData = storage.getItem(memoryStorageKey);
            const conversations = existingData ? JSON.parse(existingData) : [];
            
            // Add new conversation data
            conversations.push(conversationData.user_message);
            conversations.push(conversationData.assistant_message);
            
            // Apply limit (keep last 100 messages)
            if (conversations.length > 100) {
              conversations.splice(0, conversations.length - 100);
            }
            
            // Store back to browser storage
            storage.setItem(memoryStorageKey, JSON.stringify(conversations));
          }
        } catch (memoryError) {
          console.error('❌ Failed to store memory:', memoryError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763118348594');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'tool_call';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        console.log('🔄 Handoff to:', result.target_agent);
        
        const handoffThreadId = result.threadId;
        const handoffSessionId = result.sessionId;
        const execution_mode = result.execution_mode || 'transfer_control';
        
        const targetConfig = (targetAgentConfigs as Record<string, any>)[result.target_agent];
        
        if (!targetConfig) {
          console.error('❌ Target agent not found:', result.target_agent);
          throw new Error(`Target agent configuration not found: ${result.target_agent}. Available: ${Object.keys(targetAgentConfigs).join(', ')}`);
        }
        
        // 🔄 AUTO-EXECUTE TARGET AGENT with shared thread
        try {
          // 🔧 Construct absolute URL for both client and server contexts
          let apiUrl = '/api/openai-agent-sdk';
          if (typeof window === 'undefined') {
            // Server-side: Use environment variables to build absolute URL
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                           process.env.VERCEL_URL || 
                           process.env.NEXT_PUBLIC_FRONTEND_URL || 
                           'http://localhost:3000';
            // Ensure protocol is included
            const protocol = baseUrl.startsWith('http') ? '' : 'https://';
            apiUrl = `${protocol}${baseUrl}/api/openai-agent-sdk`;
          }
          
          // Call the target agent with THE TARGET'S OWN CONFIGURATION
          const targetAgentResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: `Context from previous agent: ${result.context_summary || 'No context provided'}`,
              user_prompt: targetConfig.user_prompt || '',
              model: targetConfig.model || 'gpt-4o',
              instructions: targetConfig.instructions || 'You are a helpful AI assistant.',
              temperature: targetConfig.temperature || 0.7,
              max_tokens: targetConfig.max_tokens || 1000,
              apiKey: effectiveApiKey,
              agentType: targetConfig.agentType || targetConfig.agentSDKType || 'agent_as_tool',
              selected_tools: targetConfig.selected_tools || [],
              tool_configs: targetConfig.tool_configs || {},
              tool_settings: targetConfig.tool_settings || {},
              mcp_servers: targetConfig.mcp_servers || [],
              // 🔄 CRITICAL: Pass shared thread for conversation continuity
              threadId: handoffThreadId,
              sessionId: handoffSessionId,
              // Indicate this is a handoff continuation
              isHandoffContinuation: true,
              handoffReason: result.reason,
              handoffContext: result.context_summary
            })
          });
          
          if (targetAgentResponse.ok) {
            const targetAgentResult = await targetAgentResponse.json();
            
            // ✅ DIFFERENT BEHAVIOR BASED ON EXECUTION MODE
            if (execution_mode === 'transfer_control') {
              // TRUE HANDOFF: Only target result, workflow continues from target
              step2Result = targetAgentResult.content || targetAgentResult.text || targetAgentResult.message || 'Target agent response';
            } else {
              // TOOL CALL MODE: Combine results, orchestrator continues
              step2Result = {
                handoffCompleted: true,
                execution_mode: 'tool_call',
                sourceAgent: result.message,
                targetAgent: result.target_agent,
                targetAgentResult: targetAgentResult.content || targetAgentResult.text || targetAgentResult.message,
                handoffReason: result.reason,
                handoffContext: result.context_summary,
                sharedThreadId: handoffThreadId,
                sharedSessionId: handoffSessionId,
                finalMessage: `Agent tool call completed: ${result.target_agent} returned: ${targetAgentResult.content || targetAgentResult.text || 'Result received'}`
              };
            }
            
            // 🚫 CRITICAL: Mark target agent as already executed to prevent double execution (CLIENT-SIDE ONLY)
            if (typeof window !== 'undefined') {
              if (!window.__executedNodes) {
                window.__executedNodes = new Set();
              }
              window.__executedNodes.add(result.target_agent);
              
              // Signal workflow to continue from target's output for transfer control (CLIENT-SIDE ONLY)
              if (execution_mode === 'transfer_control') {
                window.__workflowContinueFrom = result.target_agent;
              }
            } else {
              console.log('ℹ️ Server-side execution: Skipping window-based node tracking');
            }
          } else {
            console.error('❌ Target agent execution failed:', targetAgentResponse.status);
            step2Result = {
              handoffCompleted: false,
              sourceAgent: result.message,
              targetAgent: result.target_agent,
              error: 'Target agent execution failed',
              handoffReason: result.reason
            };
          }
        } catch (handoffError) {
          console.error('❌ Handoff error:', handoffError);
          step2Result = {
            handoffCompleted: false,
            sourceAgent: result.message,
            targetAgent: result.target_agent,
            error: handoffError instanceof Error ? handoffError.message : String(handoffError),
            handoffReason: result.reason
          };
        }
      } else {
        // Normal response (no handoff)
        step2Result = result.content || result.text || result.message || 'AI response received';
      }
      
      // 📊 CRITICAL: Store result in flowResults for dataFlow access
      if (!flowResults.nodeResults) flowResults.nodeResults = {};
      if (!flowResults.variables) flowResults.variables = {};
      if (!flowResults.aiResponses) flowResults.aiResponses = {};
      
      // Generate safe display name at runtime
      const displayName = "Main_Agent";
      
      // Store in nodeResults for dataFlow.getByNodeId()
      flowResults.nodeResults['openaiAgentSDKNode-1763118348594'] = {
        nodeId: 'openaiAgentSDKNode-1763118348594',
        nodeType: 'openaiAgentSDKNode',
        stepNumber: (flowResults.stepCounter || 0) + 1,
        displayName: displayName,
        data: step2Result,
        timestamp: new Date().toISOString(),
        success: true
      };
      
      // Store in variables for dataFlow.get()
      flowResults.variables[displayName] = step2Result;
      flowResults.aiResponses[displayName] = step2Result;
      
      // Store at top-level for direct access
      flowResults[displayName] = step2Result;
      
      // Update current/previous for dataFlow.current() and dataFlow.previous()
      flowResults.previousResult = flowResults.currentResult;
      flowResults.currentResult = step2Result;
      
      // Increment step counter
      flowResults.stepCounter = (flowResults.stepCounter || 0) + 1;
      }
      
    } catch (error) {
      console.error('💥 OpenAI Agent SDK error:', error);
      step2Result = 'Error: ' + (error instanceof Error ? error.message : String(error));
      flowErrors.push('OpenAI Agent SDK error in node openaiAgentSDKNode-1763118348594: ' + (error instanceof Error ? error.message : String(error)));
    }
    
      
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763118348594'] = {
      nodeId: 'openaiAgentSDKNode-1763118348594',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 2,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763118348594',
      data: step2Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763118348594'] = step2Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763118348594'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763118348594'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763118348594'] = step2Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763118348594 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763118348594"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763118348594")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763118348594")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
      
      // Update currentResult for next step - respect processor-specific currentResult if set
      if (flowResults.currentResult !== undefined && 
          flowResults.stepCounter > 1) {
        // Processor updated flowResults.currentResult, use that (e.g., HTTP processor sets responseData)
        currentResult = flowResults.currentResult;
        console.log('🔄 Using processor-specific currentResult for next step');
      } else {
        // Fallback to step result wrapper
        currentResult = step2Result;
        console.log('🔄 Using step result wrapper for next step');
      }
    } catch (stepError) {
      const stepErrorMessage = stepError instanceof Error ? stepError.message : String(stepError) || 'Unknown step error';
      console.error('❌ Error in step 2 (openaiAgentSDKNode):', stepError);
      flowErrors.push(`Step 2 (openaiAgentSDKNode): ${stepErrorMessage}`);
      
      // Set a default result for this step to avoid undefined references
      step2Result = { 
        error: true, 
        message: stepErrorMessage, 
        nodeType: 'openaiAgentSDKNode',
        nodeId: 'openaiAgentSDKNode-1763118348594',
        stepNumber: 2
      };
      
      currentResult = step2Result; // Update currentResult even on error
      
      // Store error result in enhanced data flow system
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763118348594'] = {
      nodeId: 'openaiAgentSDKNode-1763118348594',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 2,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763118348594',
      data: step2Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763118348594'] = step2Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763118348594'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763118348594'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763118348594'] = step2Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763118348594 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763118348594"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763118348594")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763118348594")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
    }

    // Make flowResults globally available for table and other component access
    if (typeof window !== 'undefined') {
      (window as any).flowResults = flowResults;
      console.log('🌐 Made flowResults globally available:', flowResults);
          // Store as main chain data for cross-chain access
      (window as any).mainChainFlowResults = flowResults;
      console.log('🔗 Stored main chain data for cross-chain access:', {
        nodeResults: Object.keys(flowResults.nodeResults || {}),
        aiResponses: Object.keys(flowResults.aiResponses || {}),
        variables: Object.keys(flowResults.variables || {})
      });
      
      // CRITICAL: Initialize button chain registry for dynamic chain ID lookup
      if (!(window as any).buttonChainRegistry) {
        (window as any).buttonChainRegistry = {};
      }
      
      // Register this chain if it's a button-triggered chain
      if ('flow_inbound-email-1763097045884_1766551025527'.includes('button')) {
        // Extract button node information from chain
        const buttonNodes = Object.values(flowResults.nodeResults || {}).filter(
          (result: any) => result.nodeType === 'button'
        );
        
        buttonNodes.forEach((buttonNode: any) => {
          // Store chain ID mapped to button element ID
          if (buttonNode.elementId) {
            (window as any).buttonChainRegistry[buttonNode.elementId] = 'flow_inbound-email-1763097045884_1766551025527';
            console.log(`🔗 Registered button chain: ${buttonNode.elementId} → flow_inbound-email-1763097045884_1766551025527`);
          }
        });
      }
      
      // Add memory management helper functions to window
      window.getConversationHistory  = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          const stored = storage.getItem(storageKey);
          return stored ? JSON.parse(stored) : [];
        } catch (error) {
          console.error('💭 Failed to get conversation history:', error);
          return [];
        }
      };
      
      window.clearConversationHistory = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          storage.removeItem(storageKey);
          console.log('💭 Cleared conversation history for:', storageKey);
          return true;
        } catch (error) {
          console.error('💭 Failed to clear conversation history:', error);
          return false;
        }
      };
      
      console.log("💭 Memory management helpers added to window:", ['getConversationHistory', 'clearConversationHistory']);
      
      // Dispatch events for component integration (especially tables)
      window.dispatchEvent(new CustomEvent('workflowCompleted', { 
        detail: { flowResults, chainId: 'flow_inbound-email-1763097045884_1766551025527' } 
      }));
      window.dispatchEvent(new CustomEvent('flowExecutionCompleted', { 
        detail: { flowResults, chainId: 'flow_inbound-email-1763097045884_1766551025527' } 
      }));
      console.log("📡 Dispatched workflow completion events");
    }
    
    console.log('✅ Flow chain completed successfully:', flowResults);
    return {
      success: true,
      results: flowResults,
      errors: flowErrors,
      chainId: 'flow_inbound-email-1763097045884_1766551025527'
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
    console.error('❌ Flow chain execution error:', error);
    return {
      success: false,
      results: flowResults,
      errors: [...flowErrors, errorMessage],
      chainId: 'flow_inbound-email-1763097045884_1766551025527'
    };
  }
};





// ==> FLOW CHAIN: flow_openaiAgentSDKNode-1763097052561_1766551025528 <==
// Chain: openaiAgentSDKNode

const executeFlowChain_flow_openaiAgentSDKNode_1763097052561_1766551025528 = async (initialData: any = {}): Promise<FlowResult> => {
  // CRITICAL FIX: Extract ONLY essential trigger fields to prevent stale data propagation
  // Do NOT spread entire initialData as it may contain stale nested references
  const cleanedInitialData: any = {
    buttonId: initialData?.buttonId,
    formId: initialData?.formId,
    formData: initialData?.formData ? { ...initialData.formData } : {},
    clickTimestamp: initialData?.clickTimestamp,
    trigger: initialData?.trigger
  };
  
  // CRITICAL: Create flowResults as a NEW object, not a reference to cleanedInitialData
  // This ensures complete isolation from any stale state
  const flowResults: Record<string, any> = {
    ...cleanedInitialData
  };
  const flowErrors: string[] = [];
  let currentResult: any = cleanedInitialData; // Use a mutable variable for passing data between steps
  
  // WORKFLOW ISOLATION FIX: Assign unique execution ID for this workflow run
  flowResults._executionId = `flow_openaiAgentSDKNode_1763097052561_1766551025528_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  console.log('🔗 Starting flow chain: flow_openaiAgentSDKNode-1763097052561_1766551025528');
  console.log('📊 Initial data:', initialData);
  console.log('🆔 Execution ID:', flowResults._executionId);

  try {

    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};




    // Enhanced Data Flow Helper Functions - CRITICAL: Define early to ensure availability in all contexts
    // This ensures dataFlow is available immediately after initialization for all node processors
    const dataFlow = {
      // Get current result
      current: () => flowResults.currentResult,

      // Get previous step result
      previous: () => flowResults.previousResult,

      // Get result by variable name
      get: (name: any) => {
        // First check at the top level (for form fields)
        if (flowResults[name] !== undefined) {
          return flowResults[name];
        }

        // Try specialized collections
        if (flowResults.variables && flowResults.variables[name]) {
          return flowResults.variables[name];
        }
        if (flowResults.inputs && flowResults.inputs[name]) {
          return flowResults.inputs[name];
        }
        if (flowResults.formData && flowResults.formData[name]) {
          return flowResults.formData[name];
        }
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[name]) {
          return flowResults.inboundEmailData[name];
        }
        if (flowResults.apiResponses && flowResults.apiResponses[name]) {
          return flowResults.apiResponses[name];
        }
        if (flowResults.calculations && flowResults.calculations[name]) {
          return flowResults.calculations[name];
        }
        if (flowResults.aiResponses && flowResults.aiResponses[name]) {
          return flowResults.aiResponses[name];
        }

        // Search in node results
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).displayName === name) {
            return (result as any).data;
          }
        }

        // Try case-insensitive matching as a last resort
        const lowerName = name.toLowerCase();

        // Check top level
        for (const key of Object.keys(flowResults)) {
          if (key.toLowerCase() === lowerName) {
            return flowResults[key];
          }
        }

        // Check form data
        if (flowResults.formData) {
          for (const key of Object.keys(flowResults.formData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.formData[key];
            }
          }
        }

        // Check inbound email data
        if (flowResults.inboundEmailData) {
          for (const key of Object.keys(flowResults.inboundEmailData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.inboundEmailData[key];
            }
          }
        }

        return undefined;
      },

      // Get result by node ID
      getByNodeId: (nodeId: any) => {
        if (!flowResults.nodeResults || !flowResults.nodeResults[nodeId]) {
          return undefined;
        }

        const nodeResult = flowResults.nodeResults[nodeId];

        // For form nodes, return the data object which contains all form fields
        // This allows accessing specific fields like: dataFlow.getByNodeId("form-123").name
        if (nodeResult.nodeType === 'form' && nodeResult.data) {
          return nodeResult.data;
        }

        // CRITICAL FIX: For button nodes, return the buttonId for HTTP URL construction
        // This allows HTTP nodes to use {{dataFlow.getByNodeId("button-1761322615789")}} in URLs
        if (nodeResult.nodeType === 'button' && nodeResult.data && nodeResult.data.buttonId) {
          return nodeResult.data.buttonId;
        }

        // CRITICAL FIX: For conditional nodes, return the conditionResult as string for chaining
        // This allows subsequent condition nodes to properly reference previous condition results
        if (nodeResult.nodeType === 'if-conditional' && nodeResult.data && nodeResult.data.conditionResult !== undefined) {
          return String(nodeResult.data.conditionResult);
        }

        // CRITICAL FIX: For input nodes, return the actual user-provided value when possible
        if (nodeResult.nodeType === 'input' && nodeResult.data) {
          try {
            if (typeof nodeResult.data.get === 'function') {
              const inputValue = nodeResult.data.get();
              if (inputValue !== undefined && inputValue !== null) {
                return inputValue;
              }
            }
          } catch (error) {
            console.warn('dataFlow.getByNodeId input get() failed:', error);
          }

          if (nodeResult.data.currentValue !== undefined) {
            return nodeResult.data.currentValue;
          }

          if (nodeResult.data.value !== undefined) {
            return nodeResult.data.value;
          }
        }

        // Default: return the data property of the node
        return nodeResult.data;
      },

      // Get all variables of a specific type
      getByType: (nodeType: any) => {
        const results = [];
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).nodeType === nodeType) {
            results.push((result as any).data);
          }
        }
        return results;
      },

      // Get last N results
      getLast: (n: any = 1) => {
        const allResults = Object.values(flowResults.nodeResults || {})
          .sort((a: any, b: any) => (b as any).stepNumber - (a as any).stepNumber);
        return n === 1 ? (allResults[0] as any)?.data : allResults.slice(0, n).map((r: any) => (r as any).data);
      },

      // Get all available variable names
      getAvailableNames: () => {
        const names = [];

        // Add from specialized collections
        if (flowResults.variables) names.push(...Object.keys(flowResults.variables));
        if (flowResults.inputs) names.push(...Object.keys(flowResults.inputs));
        if (flowResults.formData) names.push(...Object.keys(flowResults.formData));
        if (flowResults.inboundEmailData) names.push(...Object.keys(flowResults.inboundEmailData));
        if (flowResults.apiResponses) names.push(...Object.keys(flowResults.apiResponses));
        if (flowResults.calculations) names.push(...Object.keys(flowResults.calculations));
        if (flowResults.aiResponses) names.push(...Object.keys(flowResults.aiResponses));

        // Add display names
        for (const result of Object.values(flowResults.nodeResults || {})) {
          names.push((result as any).displayName);
        }

        // Convert Set to Array to avoid iteration issues
        const uniqueNames = new Set(names);
        const uniqueArray: string[] = [];
        uniqueNames.forEach(name => uniqueArray.push(name));
        return uniqueArray.sort();
      },
       // Get field by name - checks variables, flowResults, and input nodes
      getByFieldName: (fieldName: any) => {
        console.log('🔍 dataFlow.getByFieldName() called for:', fieldName);
        
        // First check variables (for Telegram inbound, email inbound, etc.)
        if (flowResults.variables && flowResults.variables[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.variables:', flowResults.variables[fieldName]);
          return flowResults.variables[fieldName];
        }
        
        // Check top-level flowResults
        if (flowResults[fieldName] !== undefined) {
          console.log('✅ Found in flowResults top-level:', flowResults[fieldName]);
          return flowResults[fieldName];
        }
        
        // Check window.dataFlow (for Telegram inbound data stored globally)
        if (typeof window !== 'undefined' && window.dataFlow && window.dataFlow[fieldName] !== undefined) {
          console.log('✅ Found in window.dataFlow:', window.dataFlow[fieldName]);
          return window.dataFlow[fieldName];
        }
        
        // Check inputs collection
        if (flowResults.inputs && flowResults.inputs[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inputs:', flowResults.inputs[fieldName]);
          return flowResults.inputs[fieldName];
        }
        
        // Check formData
        if (flowResults.formData && flowResults.formData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.formData:', flowResults.formData[fieldName]);
          return flowResults.formData[fieldName];
        }
        
        // Check inboundEmailData
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inboundEmailData:', flowResults.inboundEmailData[fieldName]);
          return flowResults.inboundEmailData[fieldName];
        }
        
        // Fallback: Search for input nodes (existing behavior)
        if (flowResults.nodeResults) {
          for (const [nodeId, nodeResult] of Object.entries(flowResults.nodeResults)) {
            if ((nodeResult as any).nodeType === 'input') {
              const inputData = (nodeResult as any).data;
              
              // Check inputName from config
              if (inputData && typeof inputData === 'object') {
                const inputName = inputData.inputName || inputData.name || inputData.fieldName;
                if (inputName && inputName.toLowerCase() === String(fieldName).toLowerCase()) {
                  if (inputData.inputHandler) {
                    try {
                      const currentValue = inputData.inputHandler.get();
                      console.log('✅ Found in input node:', currentValue);
                      return currentValue;
                    } catch (error) {
                      console.warn('[WARNING] Error getting input value:', error);
                    }
                  }
                }
              }
            }
          }
        }
        
        console.warn('⚠️ Field not found:', fieldName);
        return undefined;
      }
    
    };

    // Make dataFlow available globally for this execution
    if (typeof window !== 'undefined') {
      (window as any).dataFlow = dataFlow;
      const existingDataFlow = (window as any).dataFlow || {};
      // Merge existing data with new dataFlow methods
      (window as any).dataFlow = {
        ...existingDataFlow,  // Preserve existing data (video-gen, image-gen results)
        ...dataFlow            // Add new dataFlow methods (getByNodeId, current, previous, etc.)
      };
      (window as any).getPreviousResult = dataFlow.previous;
      (window as any).getFlowResult = dataFlow.get;
      (window as any).getAllFlowResults = dataFlow.getAvailableNames;
    }
    
    // SECURITY: Store sanitized chain data for field resolution
    flowResults.originalChainData = {"id":"flow_openaiAgentSDKNode-1763097052561_1766551025528","nodes":[{"id":"openaiAgentSDKNode-1763097052561","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Promotion Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Promotion Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":-8.94670903456256,"y":605.4826981483436}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"openaiAgentSDKNode-1763097052561","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Promotion Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Promotion Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":-8.94670903456256,"y":605.4826981483436}},"endNode":{"id":"openaiAgentSDKNode-1763097052561","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Promotion Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Promotion Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":-8.94670903456256,"y":605.4826981483436}}};

    // Declare all step result variables
    let step1Result: any;



    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};
    
    // Store original chain data for field resolution
    flowResults.originalChainData = {"id":"flow_openaiAgentSDKNode-1763097052561_1766551025528","nodes":[{"id":"openaiAgentSDKNode-1763097052561","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Promotion Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Promotion Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":-8.94670903456256,"y":605.4826981483436}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"openaiAgentSDKNode-1763097052561","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Promotion Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Promotion Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":-8.94670903456256,"y":605.4826981483436}},"endNode":{"id":"openaiAgentSDKNode-1763097052561","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Promotion Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Promotion Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":-8.94670903456256,"y":605.4826981483436}}};
    
    // === WORKFLOW NODES: Make workflow nodes globally accessible for processors ===
    if (typeof window !== 'undefined') {
      // SECURITY: Store SANITIZED workflow nodes in window context (remove API keys)
      // Sanitize each node individually to ensure all sensitive data is removed
      const sanitizedNodes = [{"id":"openaiAgentSDKNode-1763097052561","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Promotion Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Promotion Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":-8.94670903456256,"y":605.4826981483436}}];
      
      window.__currentWorkflowNodes = sanitizedNodes;
      window.__flowChainMetadata = {
        chainId: 'flow_openaiAgentSDKNode-1763097052561_1766551025528',
        currentChainNodes: sanitizedNodes,
        nodeCount: 1
      };
      console.log('🔗 Workflow nodes made available globally: 1 nodes');
    }
    
    // === CRITICAL: Import cross-chain data for data access ===
    // This allows the separate chain to access data from the main chain
    if (initialData.crossChainNodeResults) {
      console.log('🔗 Importing cross-chain node results for data access');
      flowResults.nodeResults = { ...flowResults.nodeResults, ...initialData.crossChainNodeResults };
      console.log('📋 Imported node results:', Object.keys(initialData.crossChainNodeResults));
    }
    if (initialData.crossChainFormData) {
      console.log('🔗 Importing cross-chain form data');
      flowResults.formData = { ...flowResults.formData, ...initialData.crossChainFormData };
      // Also make form fields accessible at top level
      Object.entries(initialData.crossChainFormData).forEach(([key, value]) => {
        flowResults[key] = value;
      });
      console.log('📋 Imported form data:', Object.keys(initialData.crossChainFormData));
    }
    if (initialData.crossChainVariables) {
      flowResults.variables = { ...flowResults.variables, ...initialData.crossChainVariables };
    }
    if (initialData.crossChainApiResponses) {
      flowResults.apiResponses = { ...flowResults.apiResponses, ...initialData.crossChainApiResponses };
    }
    if (initialData.crossChainAiResponses) {
      flowResults.aiResponses = { ...flowResults.aiResponses, ...initialData.crossChainAiResponses };
    }
    if (initialData.crossChainInputs) {
      flowResults.inputs = { ...flowResults.inputs, ...initialData.crossChainInputs };
    }
    if (initialData.crossChainCalculations) {
      flowResults.calculations = { ...flowResults.calculations, ...initialData.crossChainCalculations };
    }
    
    // === ENHANCED: Import inherited data structure ===
    if (initialData.inheritedData) {
      console.log('🔗 Importing inherited data structure');
      const inherited = initialData.inheritedData;
      
      // Merge all inherited collections
      if (inherited.nodeResults) {
        flowResults.nodeResults = { ...flowResults.nodeResults, ...inherited.nodeResults };
        console.log('📋 Inherited nodeResults:', Object.keys(inherited.nodeResults));
      }
      if (inherited.formData) {
        flowResults.formData = { ...flowResults.formData, ...inherited.formData };
        // Make form fields accessible at top level
        Object.entries(inherited.formData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      if (inherited.variables) flowResults.variables = { ...flowResults.variables, ...inherited.variables };
      if (inherited.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...inherited.apiResponses };
      if (inherited.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...inherited.aiResponses };
      if (inherited.inputs) flowResults.inputs = { ...flowResults.inputs, ...inherited.inputs };
      if (inherited.calculations) flowResults.calculations = { ...flowResults.calculations, ...inherited.calculations };
      
      // Set current and previous results from inherited data
      if (inherited.currentResult !== undefined) {
        flowResults.currentResult = inherited.currentResult;
        currentResult = inherited.currentResult;
        console.log('📋 Using inherited currentResult:', currentResult);
      }
      if (inherited.previousResult !== undefined) {
        flowResults.previousResult = inherited.previousResult;
      }
    }
    
    // === FALLBACK: Check global cross-chain data ===
    if (typeof window !== 'undefined') {
      // Check for globally stored cross-chain data
      if (window.mainChainFlowResults) {
        console.log('🌐 Found global main chain data, importing...');
        const mainChain = window.mainChainFlowResults;
        
        // CRITICAL FIX: Do NOT import nodeResults from previous executions
        // nodeResults is execution-specific and should be fresh for each run
        // Only import persistent data like formData, variables, etc.
        // if (mainChain.nodeResults && Object.keys(mainChain.nodeResults).length > 0) {
        //   flowResults.nodeResults = { ...flowResults.nodeResults, ...mainChain.nodeResults };
        //   console.log('📋 Imported global nodeResults:', Object.keys(mainChain.nodeResults));
        // }
        if (mainChain.formData && Object.keys(mainChain.formData).length > 0) {
          flowResults.formData = { ...flowResults.formData, ...mainChain.formData };
          Object.entries(mainChain.formData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
          console.log('📋 Imported global formData:', Object.keys(mainChain.formData));
        }
        if (mainChain.variables) flowResults.variables = { ...flowResults.variables, ...mainChain.variables };
        if (mainChain.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...mainChain.apiResponses };
        if (mainChain.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...mainChain.aiResponses };
        
        // Use router data if current result is not set
        if (!currentResult && mainChain.routerData) {
          currentResult = mainChain.routerData;
          flowResults.currentResult = mainChain.routerData;
          console.log('📋 Using global router data as currentResult');
        }
      }
    }
    
    console.log('📊 Final flowResults after cross-chain import:', {
      nodeResults: Object.keys(flowResults.nodeResults || {}),
      formData: Object.keys(flowResults.formData || {}),
      variables: Object.keys(flowResults.variables || {}),
      currentResult: !!currentResult
    });
    
    // Process form data if provided in the initial data
    // This ensures form fields are properly extracted and normalized
    if (initialData && typeof initialData === 'object') {
      // Check if we have form data in a nested property
      if (initialData.formData && typeof initialData.formData === 'object') {
        flowResults.formData = { ...initialData.formData };
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(initialData.formData).forEach(([key, value]) => {
          if (!key.startsWith('_')) {
            flowResults[key] = value;
          }
        });
        
        console.log('📝 Extracted form data from initialData.formData:', flowResults.formData);
      }
      
      // Check for form-like data at the top level
            const topLevelFormData: Record<string, any> = {};
      let hasFormFields = false;
      
      Object.entries(initialData).forEach(([key, value]) => {
        // Skip metadata and special properties
        if (!key.startsWith('_') && 
            key !== 'buttonId' && 
            key !== 'formId' && 
            key !== 'trigger' &&
            key !== 'clickTimestamp' &&
            key !== 'timestamp') {
          
          // Only include simple values that look like form fields
          if (typeof value === 'string' || 
              typeof value === 'number' || 
              typeof value === 'boolean') {
            topLevelFormData[key] = value;
            hasFormFields = true;
          }
        }
      });
      
      if (hasFormFields) {
        // Store in formData if not already set
        if (!flowResults.formData || Object.keys(flowResults.formData).length === 0) {
          flowResults.formData = topLevelFormData;
          console.log('📝 Extracted form-like data from top level:', topLevelFormData);
        }
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(topLevelFormData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      
      // Process inbound email data if provided in the initial data
      // This ensures email fields like subject, from, text are properly extracted and normalized
      if (initialData.subject || initialData.from || initialData.text || initialData.emailData) {
        console.log('📧 Processing inbound email data from initialData...');
        
        // Check if we have email data in a nested property
        if (initialData.emailData && typeof initialData.emailData === 'object') {
          flowResults.inboundEmailData = { ...initialData.emailData };
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(initialData.emailData).forEach(([key, value]) => {
            if (!key.startsWith('_')) {
              flowResults[key] = value;
            }
          });
          
          console.log('📧 Extracted email data from initialData.emailData:', flowResults.inboundEmailData);
        }
        
        // Check for email-like data at the top level
        const topLevelEmailData: Record<string, any> = {};
        let hasEmailFields = false;
        
        // Common email field names to look for
        const emailFields = ['subject', 'from', 'to', 'text', 'body', 'html', 'sender', 'recipient', 'message_id', 'timestamp'];
        
        Object.entries(initialData).forEach(([key, value]) => {
          // Check if this is an email field (case-insensitive)
          const isEmailField = emailFields.some(field => 
            key.toLowerCase() === field.toLowerCase() || 
            key.toLowerCase().includes(field.toLowerCase())
          );
          
          if (isEmailField && value !== undefined && value !== null) {
            topLevelEmailData[key] = value;
            hasEmailFields = true;
          }
        });
        
        if (hasEmailFields) {
          // Store in inboundEmailData if not already set
          if (!flowResults.inboundEmailData || Object.keys(flowResults.inboundEmailData).length === 0) {
            flowResults.inboundEmailData = topLevelEmailData;
            console.log('📧 Extracted email-like data from top level:', topLevelEmailData);
          }
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(topLevelEmailData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
        }
      }
    }
    
    // === STEP 1: OPENAIAGENTSDKNODE ===
    console.log('🔄 Executing step 1: openaiAgentSDKNode (You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n)');
    step1Result = currentResult; // Assign to pre-declared variable
    try {
      
    // Process with OpenAI Agent SDK (Single Input Mode)
    step1Result = '';
    
    // 🆕 EMBEDDED TARGET AGENT CONFIGURATIONS (for handoff)
    const targetAgentConfigs = {};
    
    try {
      // 🚫 CHECK: Skip if this node was already executed via handoff (CLIENT-SIDE ONLY)
      if (typeof window !== 'undefined' && window.__executedNodes && window.__executedNodes.has('openaiAgentSDKNode-1763097052561')) {
        console.log('⏭️ Skipping node (already executed via handoff):', 'openaiAgentSDKNode-1763097052561');
        
        // Get the result from dataFlow if available
        const existingResult = dataFlow.getByNodeId('openaiAgentSDKNode-1763097052561');
        if (existingResult) {
          step1Result = existingResult;
        } else {
          step1Result = 'Node already executed via handoff';
        }
        
        // Remove from executed set for next workflow run (CLIENT-SIDE ONLY)
        if (typeof window !== 'undefined' && window.__executedNodes) {
          window.__executedNodes.delete('openaiAgentSDKNode-1763097052561');
        }
      } else {
      let aiInput = '';
      
      
      // Single input processing (existing logic - UNCHANGED)
      
        // User has provided a custom prompt - use it and evaluate any dataFlow expressions
        let userPrompt = `{{from}}
{{subject}}
{{text}}`;
        const templateContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: null,
          previousResult: flowResults.previousResult,
          // 🔧 Enhanced template variable access (like Evolution Send node)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          // 🔧 Enhanced template variable access - ALL variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🔧 Fix [object Object] issue - Convert ANY object template variables to readable strings
        userPrompt = userPrompt.replace(/{{(w+)}}/g, (match, varName) => {
          const value = templateContext[varName];
          if (value && typeof value === 'object' && !varName.includes('.') && !varName.includes('(')) {
            return JSON.stringify(value, null, 2);
          }
          return match; // Let template engine handle complex expressions
        });
        
        try {
          if (userPrompt.includes('{{') && userPrompt.includes('}}')) {
            const templateResult = TemplateExpressionEngine.processTemplate(userPrompt, templateContext);
            aiInput = String(templateResult);
          } else if (userPrompt.includes('dataFlow.')) {
            const evaluatedResult = TemplateExpressionEngine.evaluate(userPrompt, templateContext, { allowFunctions: true });
            aiInput = (evaluatedResult !== undefined && evaluatedResult !== null) ? evaluatedResult : userPrompt;
          } else {
            aiInput = userPrompt;
          }
        } catch (templateError) {
          aiInput = userPrompt;
        }
      
    
      
      // Ensure aiInput is a string and not empty
      if (typeof aiInput !== 'string') {
        aiInput = JSON.stringify(aiInput, null, 2);
      }
      
      if (!aiInput || aiInput.trim() === '') {
        aiInput = 'Please provide assistance.';
      }
        
        // 📚 RETRIEVE AGENT MEMORY (if enabled)
        let memoryMessages = [];
        if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
          try {
            const agentId = 'agent-1766551025538';
            const userId = 'user-1766551025538';
            const memoryStorageType = 'simple';
            
            if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
                memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
                memoryStorageType === 'longterm_vector') {
              // Supabase/PostgreSQL memory retrieval
              try {
                const memoryResponse = await fetch('/api/memory', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    operation: 'retrieve',
                    user_id: userId,
                    agent_id: agentId,
                    memory_type: memoryStorageType,
                    limit: 10
                  })
                });
                
                if (memoryResponse.ok) {
                  const memoryData = await memoryResponse.json();
                  if (memoryData.success && memoryData.data && Array.isArray(memoryData.data)) {
                    memoryMessages = memoryData.data.flatMap(item => {
                      const messages = [];
                      if (item.input_data) {
                        messages.push({
                          role: item.input_data.role || 'user',
                          content: item.input_data.content
                        });
                      }
                      if (item.output_data) {
                        messages.push({
                          role: item.output_data.role || 'assistant',
                          content: item.output_data.content
                        });
                      }
                      return messages;
                    });
                  }
                }
              } catch (supabaseError) {
                console.error('❌ Memory retrieval error:', supabaseError);
              }
            } else {
              // Browser storage memory retrieval
              const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
              const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
              
              const storedMemory = storage.getItem(memoryStorageKey);
              if (storedMemory) {
                const conversations = JSON.parse(storedMemory);
                const recentConversations = conversations.slice(-10);
                memoryMessages = recentConversations.map(conv => ({
                  role: conv.role,
                  content: conv.content
                }));
              }
            }
          } catch (memoryError) {
            console.error('❌ Failed to retrieve memory:', memoryError);
          }
        }
        
        // Define mediaCheckContext for media content checking (renamed to avoid global templateContext conflict)
        const mediaCheckContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: flowResults.currentResult,
          previousResult: flowResults.previousResult,
          // Enhanced template variable access (like Image Gen and Smart Agent nodes)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          smartAgentResult: flowResults.variables?.smartAgentResult || {},
          // All variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🆕 Check for media content to send to AI
        let hasMediaContent = false;
        let mediaContent = null;
        
        // Check for media in evolutionReceiveResult
        if (mediaCheckContext.evolutionReceiveResult?.mediaBase64 && mediaCheckContext.evolutionReceiveResult?.mimeType) {
          const mimeType = mediaCheckContext.evolutionReceiveResult.mimeType;
          if (mimeType.startsWith('image/')) {
            hasMediaContent = true;
            mediaContent = {
              type: 'image',
              mimeType: mimeType,
              base64: mediaCheckContext.evolutionReceiveResult.mediaBase64,
              dataUrl: mediaCheckContext.evolutionReceiveResult.mediaDataUrl
            };
          }
        }
        
        // SECURITY: Load API key from environment variables instead of embedding it
      let effectiveApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';
      
      // If using stored credential, fetch from backend
      if (false && 'f8d21d16-cb2d-4319-bf3b-4f5a729e8874') {
        try {
          const credentialResponse = await fetch(`${process.env.NEXT_PUBLIC_SIMPLITA_BACKEND_URL || 'http://localhost:8000'}/api/credentials/${encodeURIComponent('f8d21d16-cb2d-4319-bf3b-4f5a729e8874')}/data`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${process.env.SIMPLITA_API_TOKEN || 'generated-app-token'}`,
              'X-User-ID': process.env.SIMPLITA_USER_ID || 'anonymous'
            }
          });

          if (credentialResponse.ok) {
            const credentialData = await credentialResponse.json();
            if (credentialData && credentialData.api_key) {
              effectiveApiKey = credentialData.api_key;
            }
          }
        } catch (credError) {
          console.error('❌ OpenAI SDK: Error retrieving stored credential:', credError);
        }
      }
      
      // 🔧 Use absolute URL for server-side compatibility
      const apiUrl = typeof window !== 'undefined' ? '/api/openai-agent-sdk' : `${process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/api/openai-agent-sdk`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: aiInput,
         user_prompt: `{{from}}
{{subject}}
{{text}}`,

          model: 'gpt-4',
          instructions: `You are an email classifier.

Your ONLY task is to extract Promotion Emails.

A Promotion Email must clearly contain:
- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.
- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.
- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.

DO NOT classify as promotions:
- Job platform emails (job alert, interview, application).
- Birthday or personal greetings of any kind.
- Business, office, or official notices.
- Bank, invoice, OTP, password reset, or verification emails.
- Any personal message from friends/family.
- Any informational email without a commercial offer.

INPUT:
From: {{from}}
Subject: {{subject}}
Body: {{text}}

OUTPUT:
If it IS a promotion, output EXACTLY this:
From: [sender name only, remove the email address, do not use any special characters]
Subject: {{subject}}
Message Summary: [One-line summary of the promotional offer]

This output MUST be sent using the MCP Server tool telegram send.

If it is NOT a promotion, return NOTHING.

STRICT FORMAT RULES:
Output ONLY these three lines.
No additional text, no markdown.
Do not include email addresses.
Do not include angle brackets.
No special characters.
No blank lines before or after the output.
Plain text only, compatible with MCP Telegram Send.
If the email is NOT personal, output NOTHING.
`,
          temperature: 0.7,
          max_tokens: 1000,
          apiKey: effectiveApiKey,
          agentType: 'agent_as_tool',
          selected_tools: [],
          tool_configs: {},
          tool_settings: {"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},
          mcp_servers: [{"id":"custom_mcp_1766550564991","url":"https://telegram-send.mcp.simplita.app/mcp","name":"telegramsend","enabled":true,"description":"Custom MCP Server"}],
          handoff_enabled: false,
          handoff_targets: [],
          // 📚 Include memory context if available
          memoryMessages: memoryMessages,
          enableMemory: false,
          memoryType: 'simple'
        })
      });
      
      if (!response.ok) {
        throw new Error('OpenAI Agent SDK API error: ' + response.status + ' - ' + response.statusText);
      }
      
      const result = await response.json();
      
      // ✅ AUTO-HANDOFF: Detect next directly connected agent (CLIENT-SIDE ONLY)
      if (false && !result.handoff && typeof window !== 'undefined') {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763097052561');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'transfer_control';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // 📚 STORE AGENT MEMORY (if enabled and response contains data)
      if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
        try {
          const agentId = 'agent-1766551025538';
          const userId = 'user-1766551025538';
          const sessionId = 'session-1766551025538';
          const memoryStorageType = 'simple';
          
          const conversationData = {
            user_message: { role: 'user', content: aiInput },
            assistant_message: { role: 'assistant', content: result.content || result.text || result.message || '' }
          };
          
          if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
              memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
              memoryStorageType === 'longterm_vector') {
            // Supabase/PostgreSQL memory storage
            try {
              const memoryStoreResponse = await fetch('/api/memory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  operation: 'store',
                  user_id: userId,
                  agent_id: agentId,
                  session_id: sessionId,
                  memory_type: memoryStorageType,
                  interaction_type: 'conversation',
                  input_data: conversationData.user_message,
                  output_data: conversationData.assistant_message,
                  metadata: {
                    model: 'gpt-4',
                    agentType: 'agent_as_tool',
                    timestamp: new Date().toISOString()
                  }
                })
              });
              
              if (!memoryStoreResponse.ok) {
                console.warn('⚠️ Failed to store memory in Supabase:', memoryStoreResponse.status);
              }
            } catch (supabaseStoreError) {
              console.error('❌ Supabase memory storage error:', supabaseStoreError);
            }
          } else {
            // Browser storage memory
            const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
            const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
            
            const existingData = storage.getItem(memoryStorageKey);
            const conversations = existingData ? JSON.parse(existingData) : [];
            
            // Add new conversation data
            conversations.push(conversationData.user_message);
            conversations.push(conversationData.assistant_message);
            
            // Apply limit (keep last 100 messages)
            if (conversations.length > 100) {
              conversations.splice(0, conversations.length - 100);
            }
            
            // Store back to browser storage
            storage.setItem(memoryStorageKey, JSON.stringify(conversations));
          }
        } catch (memoryError) {
          console.error('❌ Failed to store memory:', memoryError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763097052561');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'transfer_control';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        console.log('🔄 Handoff to:', result.target_agent);
        
        const handoffThreadId = result.threadId;
        const handoffSessionId = result.sessionId;
        const execution_mode = result.execution_mode || 'transfer_control';
        
        const targetConfig = (targetAgentConfigs as Record<string, any>)[result.target_agent];
        
        if (!targetConfig) {
          console.error('❌ Target agent not found:', result.target_agent);
          throw new Error(`Target agent configuration not found: ${result.target_agent}. Available: ${Object.keys(targetAgentConfigs).join(', ')}`);
        }
        
        // 🔄 AUTO-EXECUTE TARGET AGENT with shared thread
        try {
          // 🔧 Construct absolute URL for both client and server contexts
          let apiUrl = '/api/openai-agent-sdk';
          if (typeof window === 'undefined') {
            // Server-side: Use environment variables to build absolute URL
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                           process.env.VERCEL_URL || 
                           process.env.NEXT_PUBLIC_FRONTEND_URL || 
                           'http://localhost:3000';
            // Ensure protocol is included
            const protocol = baseUrl.startsWith('http') ? '' : 'https://';
            apiUrl = `${protocol}${baseUrl}/api/openai-agent-sdk`;
          }
          
          // Call the target agent with THE TARGET'S OWN CONFIGURATION
          const targetAgentResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: `Context from previous agent: ${result.context_summary || 'No context provided'}`,
              user_prompt: targetConfig.user_prompt || '',
              model: targetConfig.model || 'gpt-4o',
              instructions: targetConfig.instructions || 'You are a helpful AI assistant.',
              temperature: targetConfig.temperature || 0.7,
              max_tokens: targetConfig.max_tokens || 1000,
              apiKey: effectiveApiKey,
              agentType: targetConfig.agentType || targetConfig.agentSDKType || 'agent_as_tool',
              selected_tools: targetConfig.selected_tools || [],
              tool_configs: targetConfig.tool_configs || {},
              tool_settings: targetConfig.tool_settings || {},
              mcp_servers: targetConfig.mcp_servers || [],
              // 🔄 CRITICAL: Pass shared thread for conversation continuity
              threadId: handoffThreadId,
              sessionId: handoffSessionId,
              // Indicate this is a handoff continuation
              isHandoffContinuation: true,
              handoffReason: result.reason,
              handoffContext: result.context_summary
            })
          });
          
          if (targetAgentResponse.ok) {
            const targetAgentResult = await targetAgentResponse.json();
            
            // ✅ DIFFERENT BEHAVIOR BASED ON EXECUTION MODE
            if (execution_mode === 'transfer_control') {
              // TRUE HANDOFF: Only target result, workflow continues from target
              step1Result = targetAgentResult.content || targetAgentResult.text || targetAgentResult.message || 'Target agent response';
            } else {
              // TOOL CALL MODE: Combine results, orchestrator continues
              step1Result = {
                handoffCompleted: true,
                execution_mode: 'tool_call',
                sourceAgent: result.message,
                targetAgent: result.target_agent,
                targetAgentResult: targetAgentResult.content || targetAgentResult.text || targetAgentResult.message,
                handoffReason: result.reason,
                handoffContext: result.context_summary,
                sharedThreadId: handoffThreadId,
                sharedSessionId: handoffSessionId,
                finalMessage: `Agent tool call completed: ${result.target_agent} returned: ${targetAgentResult.content || targetAgentResult.text || 'Result received'}`
              };
            }
            
            // 🚫 CRITICAL: Mark target agent as already executed to prevent double execution (CLIENT-SIDE ONLY)
            if (typeof window !== 'undefined') {
              if (!window.__executedNodes) {
                window.__executedNodes = new Set();
              }
              window.__executedNodes.add(result.target_agent);
              
              // Signal workflow to continue from target's output for transfer control (CLIENT-SIDE ONLY)
              if (execution_mode === 'transfer_control') {
                window.__workflowContinueFrom = result.target_agent;
              }
            } else {
              console.log('ℹ️ Server-side execution: Skipping window-based node tracking');
            }
          } else {
            console.error('❌ Target agent execution failed:', targetAgentResponse.status);
            step1Result = {
              handoffCompleted: false,
              sourceAgent: result.message,
              targetAgent: result.target_agent,
              error: 'Target agent execution failed',
              handoffReason: result.reason
            };
          }
        } catch (handoffError) {
          console.error('❌ Handoff error:', handoffError);
          step1Result = {
            handoffCompleted: false,
            sourceAgent: result.message,
            targetAgent: result.target_agent,
            error: handoffError instanceof Error ? handoffError.message : String(handoffError),
            handoffReason: result.reason
          };
        }
      } else {
        // Normal response (no handoff)
        step1Result = result.content || result.text || result.message || 'AI response received';
      }
      
      // 📊 CRITICAL: Store result in flowResults for dataFlow access
      if (!flowResults.nodeResults) flowResults.nodeResults = {};
      if (!flowResults.variables) flowResults.variables = {};
      if (!flowResults.aiResponses) flowResults.aiResponses = {};
      
      // Generate safe display name at runtime
      const displayName = "Promotion_Agent";
      
      // Store in nodeResults for dataFlow.getByNodeId()
      flowResults.nodeResults['openaiAgentSDKNode-1763097052561'] = {
        nodeId: 'openaiAgentSDKNode-1763097052561',
        nodeType: 'openaiAgentSDKNode',
        stepNumber: (flowResults.stepCounter || 0) + 1,
        displayName: displayName,
        data: step1Result,
        timestamp: new Date().toISOString(),
        success: true
      };
      
      // Store in variables for dataFlow.get()
      flowResults.variables[displayName] = step1Result;
      flowResults.aiResponses[displayName] = step1Result;
      
      // Store at top-level for direct access
      flowResults[displayName] = step1Result;
      
      // Update current/previous for dataFlow.current() and dataFlow.previous()
      flowResults.previousResult = flowResults.currentResult;
      flowResults.currentResult = step1Result;
      
      // Increment step counter
      flowResults.stepCounter = (flowResults.stepCounter || 0) + 1;
      }
      
    } catch (error) {
      console.error('💥 OpenAI Agent SDK error:', error);
      step1Result = 'Error: ' + (error instanceof Error ? error.message : String(error));
      flowErrors.push('OpenAI Agent SDK error in node openaiAgentSDKNode-1763097052561: ' + (error instanceof Error ? error.message : String(error)));
    }
    
      
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763097052561'] = {
      nodeId: 'openaiAgentSDKNode-1763097052561',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 1,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763097052561',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763097052561'] = step1Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763097052561'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763097052561'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763097052561'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763097052561 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763097052561"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763097052561")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763097052561")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
      
      // Update currentResult for next step - respect processor-specific currentResult if set
      if (flowResults.currentResult !== undefined && 
          flowResults.stepCounter > 0) {
        // Processor updated flowResults.currentResult, use that (e.g., HTTP processor sets responseData)
        currentResult = flowResults.currentResult;
        console.log('🔄 Using processor-specific currentResult for next step');
      } else {
        // Fallback to step result wrapper
        currentResult = step1Result;
        console.log('🔄 Using step result wrapper for next step');
      }
    } catch (stepError) {
      const stepErrorMessage = stepError instanceof Error ? stepError.message : String(stepError) || 'Unknown step error';
      console.error('❌ Error in step 1 (openaiAgentSDKNode):', stepError);
      flowErrors.push(`Step 1 (openaiAgentSDKNode): ${stepErrorMessage}`);
      
      // Set a default result for this step to avoid undefined references
      step1Result = { 
        error: true, 
        message: stepErrorMessage, 
        nodeType: 'openaiAgentSDKNode',
        nodeId: 'openaiAgentSDKNode-1763097052561',
        stepNumber: 1
      };
      
      currentResult = step1Result; // Update currentResult even on error
      
      // Store error result in enhanced data flow system
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763097052561'] = {
      nodeId: 'openaiAgentSDKNode-1763097052561',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 1,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763097052561',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763097052561'] = step1Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763097052561'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763097052561'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763097052561'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763097052561 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763097052561"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763097052561")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763097052561")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
    }

    // Make flowResults globally available for table and other component access
    if (typeof window !== 'undefined') {
      (window as any).flowResults = flowResults;
      console.log('🌐 Made flowResults globally available:', flowResults);
          // Store as main chain data for cross-chain access
      (window as any).mainChainFlowResults = flowResults;
      console.log('🔗 Stored main chain data for cross-chain access:', {
        nodeResults: Object.keys(flowResults.nodeResults || {}),
        aiResponses: Object.keys(flowResults.aiResponses || {}),
        variables: Object.keys(flowResults.variables || {})
      });
      
      // CRITICAL: Initialize button chain registry for dynamic chain ID lookup
      if (!(window as any).buttonChainRegistry) {
        (window as any).buttonChainRegistry = {};
      }
      
      // Register this chain if it's a button-triggered chain
      if ('flow_openaiAgentSDKNode-1763097052561_1766551025528'.includes('button')) {
        // Extract button node information from chain
        const buttonNodes = Object.values(flowResults.nodeResults || {}).filter(
          (result: any) => result.nodeType === 'button'
        );
        
        buttonNodes.forEach((buttonNode: any) => {
          // Store chain ID mapped to button element ID
          if (buttonNode.elementId) {
            (window as any).buttonChainRegistry[buttonNode.elementId] = 'flow_openaiAgentSDKNode-1763097052561_1766551025528';
            console.log(`🔗 Registered button chain: ${buttonNode.elementId} → flow_openaiAgentSDKNode-1763097052561_1766551025528`);
          }
        });
      }
      
      // Add memory management helper functions to window
      window.getConversationHistory  = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          const stored = storage.getItem(storageKey);
          return stored ? JSON.parse(stored) : [];
        } catch (error) {
          console.error('💭 Failed to get conversation history:', error);
          return [];
        }
      };
      
      window.clearConversationHistory = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          storage.removeItem(storageKey);
          console.log('💭 Cleared conversation history for:', storageKey);
          return true;
        } catch (error) {
          console.error('💭 Failed to clear conversation history:', error);
          return false;
        }
      };
      
      console.log("💭 Memory management helpers added to window:", ['getConversationHistory', 'clearConversationHistory']);
      
      // Dispatch events for component integration (especially tables)
      window.dispatchEvent(new CustomEvent('workflowCompleted', { 
        detail: { flowResults, chainId: 'flow_openaiAgentSDKNode-1763097052561_1766551025528' } 
      }));
      window.dispatchEvent(new CustomEvent('flowExecutionCompleted', { 
        detail: { flowResults, chainId: 'flow_openaiAgentSDKNode-1763097052561_1766551025528' } 
      }));
      console.log("📡 Dispatched workflow completion events");
    }
    
    console.log('✅ Flow chain completed successfully:', flowResults);
    return {
      success: true,
      results: flowResults,
      errors: flowErrors,
      chainId: 'flow_openaiAgentSDKNode-1763097052561_1766551025528'
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
    console.error('❌ Flow chain execution error:', error);
    return {
      success: false,
      results: flowResults,
      errors: [...flowErrors, errorMessage],
      chainId: 'flow_openaiAgentSDKNode-1763097052561_1766551025528'
    };
  }
};





// ==> FLOW CHAIN: flow_openaiAgentSDKNode-1763179222370_1766551025528 <==
// Chain: openaiAgentSDKNode

const executeFlowChain_flow_openaiAgentSDKNode_1763179222370_1766551025528 = async (initialData: any = {}): Promise<FlowResult> => {
  // CRITICAL FIX: Extract ONLY essential trigger fields to prevent stale data propagation
  // Do NOT spread entire initialData as it may contain stale nested references
  const cleanedInitialData: any = {
    buttonId: initialData?.buttonId,
    formId: initialData?.formId,
    formData: initialData?.formData ? { ...initialData.formData } : {},
    clickTimestamp: initialData?.clickTimestamp,
    trigger: initialData?.trigger
  };
  
  // CRITICAL: Create flowResults as a NEW object, not a reference to cleanedInitialData
  // This ensures complete isolation from any stale state
  const flowResults: Record<string, any> = {
    ...cleanedInitialData
  };
  const flowErrors: string[] = [];
  let currentResult: any = cleanedInitialData; // Use a mutable variable for passing data between steps
  
  // WORKFLOW ISOLATION FIX: Assign unique execution ID for this workflow run
  flowResults._executionId = `flow_openaiAgentSDKNode_1763179222370_1766551025528_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  console.log('🔗 Starting flow chain: flow_openaiAgentSDKNode-1763179222370_1766551025528');
  console.log('📊 Initial data:', initialData);
  console.log('🆔 Execution ID:', flowResults._executionId);

  try {

    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};




    // Enhanced Data Flow Helper Functions - CRITICAL: Define early to ensure availability in all contexts
    // This ensures dataFlow is available immediately after initialization for all node processors
    const dataFlow = {
      // Get current result
      current: () => flowResults.currentResult,

      // Get previous step result
      previous: () => flowResults.previousResult,

      // Get result by variable name
      get: (name: any) => {
        // First check at the top level (for form fields)
        if (flowResults[name] !== undefined) {
          return flowResults[name];
        }

        // Try specialized collections
        if (flowResults.variables && flowResults.variables[name]) {
          return flowResults.variables[name];
        }
        if (flowResults.inputs && flowResults.inputs[name]) {
          return flowResults.inputs[name];
        }
        if (flowResults.formData && flowResults.formData[name]) {
          return flowResults.formData[name];
        }
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[name]) {
          return flowResults.inboundEmailData[name];
        }
        if (flowResults.apiResponses && flowResults.apiResponses[name]) {
          return flowResults.apiResponses[name];
        }
        if (flowResults.calculations && flowResults.calculations[name]) {
          return flowResults.calculations[name];
        }
        if (flowResults.aiResponses && flowResults.aiResponses[name]) {
          return flowResults.aiResponses[name];
        }

        // Search in node results
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).displayName === name) {
            return (result as any).data;
          }
        }

        // Try case-insensitive matching as a last resort
        const lowerName = name.toLowerCase();

        // Check top level
        for (const key of Object.keys(flowResults)) {
          if (key.toLowerCase() === lowerName) {
            return flowResults[key];
          }
        }

        // Check form data
        if (flowResults.formData) {
          for (const key of Object.keys(flowResults.formData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.formData[key];
            }
          }
        }

        // Check inbound email data
        if (flowResults.inboundEmailData) {
          for (const key of Object.keys(flowResults.inboundEmailData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.inboundEmailData[key];
            }
          }
        }

        return undefined;
      },

      // Get result by node ID
      getByNodeId: (nodeId: any) => {
        if (!flowResults.nodeResults || !flowResults.nodeResults[nodeId]) {
          return undefined;
        }

        const nodeResult = flowResults.nodeResults[nodeId];

        // For form nodes, return the data object which contains all form fields
        // This allows accessing specific fields like: dataFlow.getByNodeId("form-123").name
        if (nodeResult.nodeType === 'form' && nodeResult.data) {
          return nodeResult.data;
        }

        // CRITICAL FIX: For button nodes, return the buttonId for HTTP URL construction
        // This allows HTTP nodes to use {{dataFlow.getByNodeId("button-1761322615789")}} in URLs
        if (nodeResult.nodeType === 'button' && nodeResult.data && nodeResult.data.buttonId) {
          return nodeResult.data.buttonId;
        }

        // CRITICAL FIX: For conditional nodes, return the conditionResult as string for chaining
        // This allows subsequent condition nodes to properly reference previous condition results
        if (nodeResult.nodeType === 'if-conditional' && nodeResult.data && nodeResult.data.conditionResult !== undefined) {
          return String(nodeResult.data.conditionResult);
        }

        // CRITICAL FIX: For input nodes, return the actual user-provided value when possible
        if (nodeResult.nodeType === 'input' && nodeResult.data) {
          try {
            if (typeof nodeResult.data.get === 'function') {
              const inputValue = nodeResult.data.get();
              if (inputValue !== undefined && inputValue !== null) {
                return inputValue;
              }
            }
          } catch (error) {
            console.warn('dataFlow.getByNodeId input get() failed:', error);
          }

          if (nodeResult.data.currentValue !== undefined) {
            return nodeResult.data.currentValue;
          }

          if (nodeResult.data.value !== undefined) {
            return nodeResult.data.value;
          }
        }

        // Default: return the data property of the node
        return nodeResult.data;
      },

      // Get all variables of a specific type
      getByType: (nodeType: any) => {
        const results = [];
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).nodeType === nodeType) {
            results.push((result as any).data);
          }
        }
        return results;
      },

      // Get last N results
      getLast: (n: any = 1) => {
        const allResults = Object.values(flowResults.nodeResults || {})
          .sort((a: any, b: any) => (b as any).stepNumber - (a as any).stepNumber);
        return n === 1 ? (allResults[0] as any)?.data : allResults.slice(0, n).map((r: any) => (r as any).data);
      },

      // Get all available variable names
      getAvailableNames: () => {
        const names = [];

        // Add from specialized collections
        if (flowResults.variables) names.push(...Object.keys(flowResults.variables));
        if (flowResults.inputs) names.push(...Object.keys(flowResults.inputs));
        if (flowResults.formData) names.push(...Object.keys(flowResults.formData));
        if (flowResults.inboundEmailData) names.push(...Object.keys(flowResults.inboundEmailData));
        if (flowResults.apiResponses) names.push(...Object.keys(flowResults.apiResponses));
        if (flowResults.calculations) names.push(...Object.keys(flowResults.calculations));
        if (flowResults.aiResponses) names.push(...Object.keys(flowResults.aiResponses));

        // Add display names
        for (const result of Object.values(flowResults.nodeResults || {})) {
          names.push((result as any).displayName);
        }

        // Convert Set to Array to avoid iteration issues
        const uniqueNames = new Set(names);
        const uniqueArray: string[] = [];
        uniqueNames.forEach(name => uniqueArray.push(name));
        return uniqueArray.sort();
      },
       // Get field by name - checks variables, flowResults, and input nodes
      getByFieldName: (fieldName: any) => {
        console.log('🔍 dataFlow.getByFieldName() called for:', fieldName);
        
        // First check variables (for Telegram inbound, email inbound, etc.)
        if (flowResults.variables && flowResults.variables[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.variables:', flowResults.variables[fieldName]);
          return flowResults.variables[fieldName];
        }
        
        // Check top-level flowResults
        if (flowResults[fieldName] !== undefined) {
          console.log('✅ Found in flowResults top-level:', flowResults[fieldName]);
          return flowResults[fieldName];
        }
        
        // Check window.dataFlow (for Telegram inbound data stored globally)
        if (typeof window !== 'undefined' && window.dataFlow && window.dataFlow[fieldName] !== undefined) {
          console.log('✅ Found in window.dataFlow:', window.dataFlow[fieldName]);
          return window.dataFlow[fieldName];
        }
        
        // Check inputs collection
        if (flowResults.inputs && flowResults.inputs[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inputs:', flowResults.inputs[fieldName]);
          return flowResults.inputs[fieldName];
        }
        
        // Check formData
        if (flowResults.formData && flowResults.formData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.formData:', flowResults.formData[fieldName]);
          return flowResults.formData[fieldName];
        }
        
        // Check inboundEmailData
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inboundEmailData:', flowResults.inboundEmailData[fieldName]);
          return flowResults.inboundEmailData[fieldName];
        }
        
        // Fallback: Search for input nodes (existing behavior)
        if (flowResults.nodeResults) {
          for (const [nodeId, nodeResult] of Object.entries(flowResults.nodeResults)) {
            if ((nodeResult as any).nodeType === 'input') {
              const inputData = (nodeResult as any).data;
              
              // Check inputName from config
              if (inputData && typeof inputData === 'object') {
                const inputName = inputData.inputName || inputData.name || inputData.fieldName;
                if (inputName && inputName.toLowerCase() === String(fieldName).toLowerCase()) {
                  if (inputData.inputHandler) {
                    try {
                      const currentValue = inputData.inputHandler.get();
                      console.log('✅ Found in input node:', currentValue);
                      return currentValue;
                    } catch (error) {
                      console.warn('[WARNING] Error getting input value:', error);
                    }
                  }
                }
              }
            }
          }
        }
        
        console.warn('⚠️ Field not found:', fieldName);
        return undefined;
      }
    
    };

    // Make dataFlow available globally for this execution
    if (typeof window !== 'undefined') {
      (window as any).dataFlow = dataFlow;
      const existingDataFlow = (window as any).dataFlow || {};
      // Merge existing data with new dataFlow methods
      (window as any).dataFlow = {
        ...existingDataFlow,  // Preserve existing data (video-gen, image-gen results)
        ...dataFlow            // Add new dataFlow methods (getByNodeId, current, previous, etc.)
      };
      (window as any).getPreviousResult = dataFlow.previous;
      (window as any).getFlowResult = dataFlow.get;
      (window as any).getAllFlowResults = dataFlow.getAvailableNames;
    }
    
    // SECURITY: Store sanitized chain data for field resolution
    flowResults.originalChainData = {"id":"flow_openaiAgentSDKNode-1763179222370_1766551025528","nodes":[{"id":"openaiAgentSDKNode-1763179222370","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Personal Agent","model":"gpt-4.1-2025-04-14","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Personal Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":655.1931987981156,"y":954.6679068595971}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"openaiAgentSDKNode-1763179222370","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Personal Agent","model":"gpt-4.1-2025-04-14","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Personal Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":655.1931987981156,"y":954.6679068595971}},"endNode":{"id":"openaiAgentSDKNode-1763179222370","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Personal Agent","model":"gpt-4.1-2025-04-14","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Personal Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":655.1931987981156,"y":954.6679068595971}}};

    // Declare all step result variables
    let step1Result: any;



    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};
    
    // Store original chain data for field resolution
    flowResults.originalChainData = {"id":"flow_openaiAgentSDKNode-1763179222370_1766551025528","nodes":[{"id":"openaiAgentSDKNode-1763179222370","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Personal Agent","model":"gpt-4.1-2025-04-14","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Personal Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":655.1931987981156,"y":954.6679068595971}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"openaiAgentSDKNode-1763179222370","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Personal Agent","model":"gpt-4.1-2025-04-14","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Personal Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":655.1931987981156,"y":954.6679068595971}},"endNode":{"id":"openaiAgentSDKNode-1763179222370","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Personal Agent","model":"gpt-4.1-2025-04-14","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Personal Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":655.1931987981156,"y":954.6679068595971}}};
    
    // === WORKFLOW NODES: Make workflow nodes globally accessible for processors ===
    if (typeof window !== 'undefined') {
      // SECURITY: Store SANITIZED workflow nodes in window context (remove API keys)
      // Sanitize each node individually to ensure all sensitive data is removed
      const sanitizedNodes = [{"id":"openaiAgentSDKNode-1763179222370","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Personal Agent","model":"gpt-4.1-2025-04-14","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Personal Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":655.1931987981156,"y":954.6679068595971}}];
      
      window.__currentWorkflowNodes = sanitizedNodes;
      window.__flowChainMetadata = {
        chainId: 'flow_openaiAgentSDKNode-1763179222370_1766551025528',
        currentChainNodes: sanitizedNodes,
        nodeCount: 1
      };
      console.log('🔗 Workflow nodes made available globally: 1 nodes');
    }
    
    // === CRITICAL: Import cross-chain data for data access ===
    // This allows the separate chain to access data from the main chain
    if (initialData.crossChainNodeResults) {
      console.log('🔗 Importing cross-chain node results for data access');
      flowResults.nodeResults = { ...flowResults.nodeResults, ...initialData.crossChainNodeResults };
      console.log('📋 Imported node results:', Object.keys(initialData.crossChainNodeResults));
    }
    if (initialData.crossChainFormData) {
      console.log('🔗 Importing cross-chain form data');
      flowResults.formData = { ...flowResults.formData, ...initialData.crossChainFormData };
      // Also make form fields accessible at top level
      Object.entries(initialData.crossChainFormData).forEach(([key, value]) => {
        flowResults[key] = value;
      });
      console.log('📋 Imported form data:', Object.keys(initialData.crossChainFormData));
    }
    if (initialData.crossChainVariables) {
      flowResults.variables = { ...flowResults.variables, ...initialData.crossChainVariables };
    }
    if (initialData.crossChainApiResponses) {
      flowResults.apiResponses = { ...flowResults.apiResponses, ...initialData.crossChainApiResponses };
    }
    if (initialData.crossChainAiResponses) {
      flowResults.aiResponses = { ...flowResults.aiResponses, ...initialData.crossChainAiResponses };
    }
    if (initialData.crossChainInputs) {
      flowResults.inputs = { ...flowResults.inputs, ...initialData.crossChainInputs };
    }
    if (initialData.crossChainCalculations) {
      flowResults.calculations = { ...flowResults.calculations, ...initialData.crossChainCalculations };
    }
    
    // === ENHANCED: Import inherited data structure ===
    if (initialData.inheritedData) {
      console.log('🔗 Importing inherited data structure');
      const inherited = initialData.inheritedData;
      
      // Merge all inherited collections
      if (inherited.nodeResults) {
        flowResults.nodeResults = { ...flowResults.nodeResults, ...inherited.nodeResults };
        console.log('📋 Inherited nodeResults:', Object.keys(inherited.nodeResults));
      }
      if (inherited.formData) {
        flowResults.formData = { ...flowResults.formData, ...inherited.formData };
        // Make form fields accessible at top level
        Object.entries(inherited.formData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      if (inherited.variables) flowResults.variables = { ...flowResults.variables, ...inherited.variables };
      if (inherited.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...inherited.apiResponses };
      if (inherited.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...inherited.aiResponses };
      if (inherited.inputs) flowResults.inputs = { ...flowResults.inputs, ...inherited.inputs };
      if (inherited.calculations) flowResults.calculations = { ...flowResults.calculations, ...inherited.calculations };
      
      // Set current and previous results from inherited data
      if (inherited.currentResult !== undefined) {
        flowResults.currentResult = inherited.currentResult;
        currentResult = inherited.currentResult;
        console.log('📋 Using inherited currentResult:', currentResult);
      }
      if (inherited.previousResult !== undefined) {
        flowResults.previousResult = inherited.previousResult;
      }
    }
    
    // === FALLBACK: Check global cross-chain data ===
    if (typeof window !== 'undefined') {
      // Check for globally stored cross-chain data
      if (window.mainChainFlowResults) {
        console.log('🌐 Found global main chain data, importing...');
        const mainChain = window.mainChainFlowResults;
        
        // CRITICAL FIX: Do NOT import nodeResults from previous executions
        // nodeResults is execution-specific and should be fresh for each run
        // Only import persistent data like formData, variables, etc.
        // if (mainChain.nodeResults && Object.keys(mainChain.nodeResults).length > 0) {
        //   flowResults.nodeResults = { ...flowResults.nodeResults, ...mainChain.nodeResults };
        //   console.log('📋 Imported global nodeResults:', Object.keys(mainChain.nodeResults));
        // }
        if (mainChain.formData && Object.keys(mainChain.formData).length > 0) {
          flowResults.formData = { ...flowResults.formData, ...mainChain.formData };
          Object.entries(mainChain.formData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
          console.log('📋 Imported global formData:', Object.keys(mainChain.formData));
        }
        if (mainChain.variables) flowResults.variables = { ...flowResults.variables, ...mainChain.variables };
        if (mainChain.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...mainChain.apiResponses };
        if (mainChain.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...mainChain.aiResponses };
        
        // Use router data if current result is not set
        if (!currentResult && mainChain.routerData) {
          currentResult = mainChain.routerData;
          flowResults.currentResult = mainChain.routerData;
          console.log('📋 Using global router data as currentResult');
        }
      }
    }
    
    console.log('📊 Final flowResults after cross-chain import:', {
      nodeResults: Object.keys(flowResults.nodeResults || {}),
      formData: Object.keys(flowResults.formData || {}),
      variables: Object.keys(flowResults.variables || {}),
      currentResult: !!currentResult
    });
    
    // Process form data if provided in the initial data
    // This ensures form fields are properly extracted and normalized
    if (initialData && typeof initialData === 'object') {
      // Check if we have form data in a nested property
      if (initialData.formData && typeof initialData.formData === 'object') {
        flowResults.formData = { ...initialData.formData };
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(initialData.formData).forEach(([key, value]) => {
          if (!key.startsWith('_')) {
            flowResults[key] = value;
          }
        });
        
        console.log('📝 Extracted form data from initialData.formData:', flowResults.formData);
      }
      
      // Check for form-like data at the top level
            const topLevelFormData: Record<string, any> = {};
      let hasFormFields = false;
      
      Object.entries(initialData).forEach(([key, value]) => {
        // Skip metadata and special properties
        if (!key.startsWith('_') && 
            key !== 'buttonId' && 
            key !== 'formId' && 
            key !== 'trigger' &&
            key !== 'clickTimestamp' &&
            key !== 'timestamp') {
          
          // Only include simple values that look like form fields
          if (typeof value === 'string' || 
              typeof value === 'number' || 
              typeof value === 'boolean') {
            topLevelFormData[key] = value;
            hasFormFields = true;
          }
        }
      });
      
      if (hasFormFields) {
        // Store in formData if not already set
        if (!flowResults.formData || Object.keys(flowResults.formData).length === 0) {
          flowResults.formData = topLevelFormData;
          console.log('📝 Extracted form-like data from top level:', topLevelFormData);
        }
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(topLevelFormData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      
      // Process inbound email data if provided in the initial data
      // This ensures email fields like subject, from, text are properly extracted and normalized
      if (initialData.subject || initialData.from || initialData.text || initialData.emailData) {
        console.log('📧 Processing inbound email data from initialData...');
        
        // Check if we have email data in a nested property
        if (initialData.emailData && typeof initialData.emailData === 'object') {
          flowResults.inboundEmailData = { ...initialData.emailData };
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(initialData.emailData).forEach(([key, value]) => {
            if (!key.startsWith('_')) {
              flowResults[key] = value;
            }
          });
          
          console.log('📧 Extracted email data from initialData.emailData:', flowResults.inboundEmailData);
        }
        
        // Check for email-like data at the top level
        const topLevelEmailData: Record<string, any> = {};
        let hasEmailFields = false;
        
        // Common email field names to look for
        const emailFields = ['subject', 'from', 'to', 'text', 'body', 'html', 'sender', 'recipient', 'message_id', 'timestamp'];
        
        Object.entries(initialData).forEach(([key, value]) => {
          // Check if this is an email field (case-insensitive)
          const isEmailField = emailFields.some(field => 
            key.toLowerCase() === field.toLowerCase() || 
            key.toLowerCase().includes(field.toLowerCase())
          );
          
          if (isEmailField && value !== undefined && value !== null) {
            topLevelEmailData[key] = value;
            hasEmailFields = true;
          }
        });
        
        if (hasEmailFields) {
          // Store in inboundEmailData if not already set
          if (!flowResults.inboundEmailData || Object.keys(flowResults.inboundEmailData).length === 0) {
            flowResults.inboundEmailData = topLevelEmailData;
            console.log('📧 Extracted email-like data from top level:', topLevelEmailData);
          }
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(topLevelEmailData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
        }
      }
    }
    
    // === STEP 1: OPENAIAGENTSDKNODE ===
    console.log('🔄 Executing step 1: openaiAgentSDKNode (You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let\'s meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n)');
    step1Result = currentResult; // Assign to pre-declared variable
    try {
      
    // Process with OpenAI Agent SDK (Single Input Mode)
    step1Result = '';
    
    // 🆕 EMBEDDED TARGET AGENT CONFIGURATIONS (for handoff)
    const targetAgentConfigs = {};
    
    try {
      // 🚫 CHECK: Skip if this node was already executed via handoff (CLIENT-SIDE ONLY)
      if (typeof window !== 'undefined' && window.__executedNodes && window.__executedNodes.has('openaiAgentSDKNode-1763179222370')) {
        console.log('⏭️ Skipping node (already executed via handoff):', 'openaiAgentSDKNode-1763179222370');
        
        // Get the result from dataFlow if available
        const existingResult = dataFlow.getByNodeId('openaiAgentSDKNode-1763179222370');
        if (existingResult) {
          step1Result = existingResult;
        } else {
          step1Result = 'Node already executed via handoff';
        }
        
        // Remove from executed set for next workflow run (CLIENT-SIDE ONLY)
        if (typeof window !== 'undefined' && window.__executedNodes) {
          window.__executedNodes.delete('openaiAgentSDKNode-1763179222370');
        }
      } else {
      let aiInput = '';
      
      
      // Single input processing (existing logic - UNCHANGED)
      
        // User has provided a custom prompt - use it and evaluate any dataFlow expressions
        let userPrompt = `{{from}}
{{subject}}
{{text}}`;
        const templateContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: null,
          previousResult: flowResults.previousResult,
          // 🔧 Enhanced template variable access (like Evolution Send node)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          // 🔧 Enhanced template variable access - ALL variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🔧 Fix [object Object] issue - Convert ANY object template variables to readable strings
        userPrompt = userPrompt.replace(/{{(w+)}}/g, (match, varName) => {
          const value = templateContext[varName];
          if (value && typeof value === 'object' && !varName.includes('.') && !varName.includes('(')) {
            return JSON.stringify(value, null, 2);
          }
          return match; // Let template engine handle complex expressions
        });
        
        try {
          if (userPrompt.includes('{{') && userPrompt.includes('}}')) {
            const templateResult = TemplateExpressionEngine.processTemplate(userPrompt, templateContext);
            aiInput = String(templateResult);
          } else if (userPrompt.includes('dataFlow.')) {
            const evaluatedResult = TemplateExpressionEngine.evaluate(userPrompt, templateContext, { allowFunctions: true });
            aiInput = (evaluatedResult !== undefined && evaluatedResult !== null) ? evaluatedResult : userPrompt;
          } else {
            aiInput = userPrompt;
          }
        } catch (templateError) {
          aiInput = userPrompt;
        }
      
    
      
      // Ensure aiInput is a string and not empty
      if (typeof aiInput !== 'string') {
        aiInput = JSON.stringify(aiInput, null, 2);
      }
      
      if (!aiInput || aiInput.trim() === '') {
        aiInput = 'Please provide assistance.';
      }
        
        // 📚 RETRIEVE AGENT MEMORY (if enabled)
        let memoryMessages = [];
        if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
          try {
            const agentId = 'agent-1766551025539';
            const userId = 'user-1766551025539';
            const memoryStorageType = 'simple';
            
            if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
                memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
                memoryStorageType === 'longterm_vector') {
              // Supabase/PostgreSQL memory retrieval
              try {
                const memoryResponse = await fetch('/api/memory', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    operation: 'retrieve',
                    user_id: userId,
                    agent_id: agentId,
                    memory_type: memoryStorageType,
                    limit: 10
                  })
                });
                
                if (memoryResponse.ok) {
                  const memoryData = await memoryResponse.json();
                  if (memoryData.success && memoryData.data && Array.isArray(memoryData.data)) {
                    memoryMessages = memoryData.data.flatMap(item => {
                      const messages = [];
                      if (item.input_data) {
                        messages.push({
                          role: item.input_data.role || 'user',
                          content: item.input_data.content
                        });
                      }
                      if (item.output_data) {
                        messages.push({
                          role: item.output_data.role || 'assistant',
                          content: item.output_data.content
                        });
                      }
                      return messages;
                    });
                  }
                }
              } catch (supabaseError) {
                console.error('❌ Memory retrieval error:', supabaseError);
              }
            } else {
              // Browser storage memory retrieval
              const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
              const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
              
              const storedMemory = storage.getItem(memoryStorageKey);
              if (storedMemory) {
                const conversations = JSON.parse(storedMemory);
                const recentConversations = conversations.slice(-10);
                memoryMessages = recentConversations.map(conv => ({
                  role: conv.role,
                  content: conv.content
                }));
              }
            }
          } catch (memoryError) {
            console.error('❌ Failed to retrieve memory:', memoryError);
          }
        }
        
        // Define mediaCheckContext for media content checking (renamed to avoid global templateContext conflict)
        const mediaCheckContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: flowResults.currentResult,
          previousResult: flowResults.previousResult,
          // Enhanced template variable access (like Image Gen and Smart Agent nodes)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          smartAgentResult: flowResults.variables?.smartAgentResult || {},
          // All variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🆕 Check for media content to send to AI
        let hasMediaContent = false;
        let mediaContent = null;
        
        // Check for media in evolutionReceiveResult
        if (mediaCheckContext.evolutionReceiveResult?.mediaBase64 && mediaCheckContext.evolutionReceiveResult?.mimeType) {
          const mimeType = mediaCheckContext.evolutionReceiveResult.mimeType;
          if (mimeType.startsWith('image/')) {
            hasMediaContent = true;
            mediaContent = {
              type: 'image',
              mimeType: mimeType,
              base64: mediaCheckContext.evolutionReceiveResult.mediaBase64,
              dataUrl: mediaCheckContext.evolutionReceiveResult.mediaDataUrl
            };
          }
        }
        
        // SECURITY: Load API key from environment variables instead of embedding it
      let effectiveApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';
      
      // If using stored credential, fetch from backend
      if (false && 'f8d21d16-cb2d-4319-bf3b-4f5a729e8874') {
        try {
          const credentialResponse = await fetch(`${process.env.NEXT_PUBLIC_SIMPLITA_BACKEND_URL || 'http://localhost:8000'}/api/credentials/${encodeURIComponent('f8d21d16-cb2d-4319-bf3b-4f5a729e8874')}/data`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${process.env.SIMPLITA_API_TOKEN || 'generated-app-token'}`,
              'X-User-ID': process.env.SIMPLITA_USER_ID || 'anonymous'
            }
          });

          if (credentialResponse.ok) {
            const credentialData = await credentialResponse.json();
            if (credentialData && credentialData.api_key) {
              effectiveApiKey = credentialData.api_key;
            }
          }
        } catch (credError) {
          console.error('❌ OpenAI SDK: Error retrieving stored credential:', credError);
        }
      }
      
      // 🔧 Use absolute URL for server-side compatibility
      const apiUrl = typeof window !== 'undefined' ? '/api/openai-agent-sdk' : `${process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/api/openai-agent-sdk`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: aiInput,
         user_prompt: `{{from}}
{{subject}}
{{text}}`,

          model: 'gpt-4.1-2025-04-14',
          instructions: `You are an email classifier. Your ONLY task is to identify Personal Emails.
A Personal Email must clearly meet ALL of the following conditions:
Written in an informal, friendly, emotional, or casual tone.
The sender appears to be a friend, family member, or personal contact.
Contains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.
Includes personal updates, wishes, invitations, or casual conversations.
DO NOT classify as personal:
Job platform emails
Business or office-related emails
Company announcements or newsletters
Promotional or marketing emails
Bank, OTP, invoice, password reset, verification emails
System notifications or automated messages
Anything promoting a product, service, event, or subscription
Emails with a formal or professional tone
INPUT FORMAT:
 From: {{from}}
 Subject: {{subject}}
 Body: {{text}}
 Phone: +916383106386
OUTPUT RULES:
 If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):
From: [sender name only, no email address]
 Subject: {{subject}}
 Message Summary: [one short friendly summary]
This output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.
STRICT FORMAT RULES:
Output ONLY these three lines.
No additional text, no markdown.
Do not include email addresses.
Do not include angle brackets.
No special characters.
No blank lines before or after the output.
Plain text only, compatible with MCP Twilio Send.
If the email is NOT personal, output NOTHING.
`,
          temperature: 0.7,
          max_tokens: 1000,
          apiKey: effectiveApiKey,
          agentType: 'agent_as_tool',
          selected_tools: [],
          tool_configs: {},
          tool_settings: {"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},
          mcp_servers: [{"id":"custom_mcp_1766550587118","url":"https://twilio-whatsapp-send.mcp.simplita.app/mcp","name":"twiliosend","enabled":true,"description":"Custom MCP Server"}],
          handoff_enabled: false,
          handoff_targets: [],
          // 📚 Include memory context if available
          memoryMessages: memoryMessages,
          enableMemory: false,
          memoryType: 'simple'
        })
      });
      
      if (!response.ok) {
        throw new Error('OpenAI Agent SDK API error: ' + response.status + ' - ' + response.statusText);
      }
      
      const result = await response.json();
      
      // ✅ AUTO-HANDOFF: Detect next directly connected agent (CLIENT-SIDE ONLY)
      if (false && !result.handoff && typeof window !== 'undefined') {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763179222370');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'transfer_control';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // 📚 STORE AGENT MEMORY (if enabled and response contains data)
      if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
        try {
          const agentId = 'agent-1766551025539';
          const userId = 'user-1766551025539';
          const sessionId = 'session-1766551025539';
          const memoryStorageType = 'simple';
          
          const conversationData = {
            user_message: { role: 'user', content: aiInput },
            assistant_message: { role: 'assistant', content: result.content || result.text || result.message || '' }
          };
          
          if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
              memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
              memoryStorageType === 'longterm_vector') {
            // Supabase/PostgreSQL memory storage
            try {
              const memoryStoreResponse = await fetch('/api/memory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  operation: 'store',
                  user_id: userId,
                  agent_id: agentId,
                  session_id: sessionId,
                  memory_type: memoryStorageType,
                  interaction_type: 'conversation',
                  input_data: conversationData.user_message,
                  output_data: conversationData.assistant_message,
                  metadata: {
                    model: 'gpt-4.1-2025-04-14',
                    agentType: 'agent_as_tool',
                    timestamp: new Date().toISOString()
                  }
                })
              });
              
              if (!memoryStoreResponse.ok) {
                console.warn('⚠️ Failed to store memory in Supabase:', memoryStoreResponse.status);
              }
            } catch (supabaseStoreError) {
              console.error('❌ Supabase memory storage error:', supabaseStoreError);
            }
          } else {
            // Browser storage memory
            const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
            const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
            
            const existingData = storage.getItem(memoryStorageKey);
            const conversations = existingData ? JSON.parse(existingData) : [];
            
            // Add new conversation data
            conversations.push(conversationData.user_message);
            conversations.push(conversationData.assistant_message);
            
            // Apply limit (keep last 100 messages)
            if (conversations.length > 100) {
              conversations.splice(0, conversations.length - 100);
            }
            
            // Store back to browser storage
            storage.setItem(memoryStorageKey, JSON.stringify(conversations));
          }
        } catch (memoryError) {
          console.error('❌ Failed to store memory:', memoryError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763179222370');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'transfer_control';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        console.log('🔄 Handoff to:', result.target_agent);
        
        const handoffThreadId = result.threadId;
        const handoffSessionId = result.sessionId;
        const execution_mode = result.execution_mode || 'transfer_control';
        
        const targetConfig = (targetAgentConfigs as Record<string, any>)[result.target_agent];
        
        if (!targetConfig) {
          console.error('❌ Target agent not found:', result.target_agent);
          throw new Error(`Target agent configuration not found: ${result.target_agent}. Available: ${Object.keys(targetAgentConfigs).join(', ')}`);
        }
        
        // 🔄 AUTO-EXECUTE TARGET AGENT with shared thread
        try {
          // 🔧 Construct absolute URL for both client and server contexts
          let apiUrl = '/api/openai-agent-sdk';
          if (typeof window === 'undefined') {
            // Server-side: Use environment variables to build absolute URL
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                           process.env.VERCEL_URL || 
                           process.env.NEXT_PUBLIC_FRONTEND_URL || 
                           'http://localhost:3000';
            // Ensure protocol is included
            const protocol = baseUrl.startsWith('http') ? '' : 'https://';
            apiUrl = `${protocol}${baseUrl}/api/openai-agent-sdk`;
          }
          
          // Call the target agent with THE TARGET'S OWN CONFIGURATION
          const targetAgentResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: `Context from previous agent: ${result.context_summary || 'No context provided'}`,
              user_prompt: targetConfig.user_prompt || '',
              model: targetConfig.model || 'gpt-4o',
              instructions: targetConfig.instructions || 'You are a helpful AI assistant.',
              temperature: targetConfig.temperature || 0.7,
              max_tokens: targetConfig.max_tokens || 1000,
              apiKey: effectiveApiKey,
              agentType: targetConfig.agentType || targetConfig.agentSDKType || 'agent_as_tool',
              selected_tools: targetConfig.selected_tools || [],
              tool_configs: targetConfig.tool_configs || {},
              tool_settings: targetConfig.tool_settings || {},
              mcp_servers: targetConfig.mcp_servers || [],
              // 🔄 CRITICAL: Pass shared thread for conversation continuity
              threadId: handoffThreadId,
              sessionId: handoffSessionId,
              // Indicate this is a handoff continuation
              isHandoffContinuation: true,
              handoffReason: result.reason,
              handoffContext: result.context_summary
            })
          });
          
          if (targetAgentResponse.ok) {
            const targetAgentResult = await targetAgentResponse.json();
            
            // ✅ DIFFERENT BEHAVIOR BASED ON EXECUTION MODE
            if (execution_mode === 'transfer_control') {
              // TRUE HANDOFF: Only target result, workflow continues from target
              step1Result = targetAgentResult.content || targetAgentResult.text || targetAgentResult.message || 'Target agent response';
            } else {
              // TOOL CALL MODE: Combine results, orchestrator continues
              step1Result = {
                handoffCompleted: true,
                execution_mode: 'tool_call',
                sourceAgent: result.message,
                targetAgent: result.target_agent,
                targetAgentResult: targetAgentResult.content || targetAgentResult.text || targetAgentResult.message,
                handoffReason: result.reason,
                handoffContext: result.context_summary,
                sharedThreadId: handoffThreadId,
                sharedSessionId: handoffSessionId,
                finalMessage: `Agent tool call completed: ${result.target_agent} returned: ${targetAgentResult.content || targetAgentResult.text || 'Result received'}`
              };
            }
            
            // 🚫 CRITICAL: Mark target agent as already executed to prevent double execution (CLIENT-SIDE ONLY)
            if (typeof window !== 'undefined') {
              if (!window.__executedNodes) {
                window.__executedNodes = new Set();
              }
              window.__executedNodes.add(result.target_agent);
              
              // Signal workflow to continue from target's output for transfer control (CLIENT-SIDE ONLY)
              if (execution_mode === 'transfer_control') {
                window.__workflowContinueFrom = result.target_agent;
              }
            } else {
              console.log('ℹ️ Server-side execution: Skipping window-based node tracking');
            }
          } else {
            console.error('❌ Target agent execution failed:', targetAgentResponse.status);
            step1Result = {
              handoffCompleted: false,
              sourceAgent: result.message,
              targetAgent: result.target_agent,
              error: 'Target agent execution failed',
              handoffReason: result.reason
            };
          }
        } catch (handoffError) {
          console.error('❌ Handoff error:', handoffError);
          step1Result = {
            handoffCompleted: false,
            sourceAgent: result.message,
            targetAgent: result.target_agent,
            error: handoffError instanceof Error ? handoffError.message : String(handoffError),
            handoffReason: result.reason
          };
        }
      } else {
        // Normal response (no handoff)
        step1Result = result.content || result.text || result.message || 'AI response received';
      }
      
      // 📊 CRITICAL: Store result in flowResults for dataFlow access
      if (!flowResults.nodeResults) flowResults.nodeResults = {};
      if (!flowResults.variables) flowResults.variables = {};
      if (!flowResults.aiResponses) flowResults.aiResponses = {};
      
      // Generate safe display name at runtime
      const displayName = "Personal_Agent";
      
      // Store in nodeResults for dataFlow.getByNodeId()
      flowResults.nodeResults['openaiAgentSDKNode-1763179222370'] = {
        nodeId: 'openaiAgentSDKNode-1763179222370',
        nodeType: 'openaiAgentSDKNode',
        stepNumber: (flowResults.stepCounter || 0) + 1,
        displayName: displayName,
        data: step1Result,
        timestamp: new Date().toISOString(),
        success: true
      };
      
      // Store in variables for dataFlow.get()
      flowResults.variables[displayName] = step1Result;
      flowResults.aiResponses[displayName] = step1Result;
      
      // Store at top-level for direct access
      flowResults[displayName] = step1Result;
      
      // Update current/previous for dataFlow.current() and dataFlow.previous()
      flowResults.previousResult = flowResults.currentResult;
      flowResults.currentResult = step1Result;
      
      // Increment step counter
      flowResults.stepCounter = (flowResults.stepCounter || 0) + 1;
      }
      
    } catch (error) {
      console.error('💥 OpenAI Agent SDK error:', error);
      step1Result = 'Error: ' + (error instanceof Error ? error.message : String(error));
      flowErrors.push('OpenAI Agent SDK error in node openaiAgentSDKNode-1763179222370: ' + (error instanceof Error ? error.message : String(error)));
    }
    
      
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763179222370'] = {
      nodeId: 'openaiAgentSDKNode-1763179222370',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 1,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763179222370',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763179222370'] = step1Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763179222370'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763179222370'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763179222370'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763179222370 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763179222370"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763179222370")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763179222370")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
      
      // Update currentResult for next step - respect processor-specific currentResult if set
      if (flowResults.currentResult !== undefined && 
          flowResults.stepCounter > 0) {
        // Processor updated flowResults.currentResult, use that (e.g., HTTP processor sets responseData)
        currentResult = flowResults.currentResult;
        console.log('🔄 Using processor-specific currentResult for next step');
      } else {
        // Fallback to step result wrapper
        currentResult = step1Result;
        console.log('🔄 Using step result wrapper for next step');
      }
    } catch (stepError) {
      const stepErrorMessage = stepError instanceof Error ? stepError.message : String(stepError) || 'Unknown step error';
      console.error('❌ Error in step 1 (openaiAgentSDKNode):', stepError);
      flowErrors.push(`Step 1 (openaiAgentSDKNode): ${stepErrorMessage}`);
      
      // Set a default result for this step to avoid undefined references
      step1Result = { 
        error: true, 
        message: stepErrorMessage, 
        nodeType: 'openaiAgentSDKNode',
        nodeId: 'openaiAgentSDKNode-1763179222370',
        stepNumber: 1
      };
      
      currentResult = step1Result; // Update currentResult even on error
      
      // Store error result in enhanced data flow system
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763179222370'] = {
      nodeId: 'openaiAgentSDKNode-1763179222370',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 1,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763179222370',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763179222370'] = step1Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763179222370'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763179222370'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763179222370'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763179222370 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763179222370"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763179222370")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763179222370")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
    }

    // Make flowResults globally available for table and other component access
    if (typeof window !== 'undefined') {
      (window as any).flowResults = flowResults;
      console.log('🌐 Made flowResults globally available:', flowResults);
          // Store as main chain data for cross-chain access
      (window as any).mainChainFlowResults = flowResults;
      console.log('🔗 Stored main chain data for cross-chain access:', {
        nodeResults: Object.keys(flowResults.nodeResults || {}),
        aiResponses: Object.keys(flowResults.aiResponses || {}),
        variables: Object.keys(flowResults.variables || {})
      });
      
      // CRITICAL: Initialize button chain registry for dynamic chain ID lookup
      if (!(window as any).buttonChainRegistry) {
        (window as any).buttonChainRegistry = {};
      }
      
      // Register this chain if it's a button-triggered chain
      if ('flow_openaiAgentSDKNode-1763179222370_1766551025528'.includes('button')) {
        // Extract button node information from chain
        const buttonNodes = Object.values(flowResults.nodeResults || {}).filter(
          (result: any) => result.nodeType === 'button'
        );
        
        buttonNodes.forEach((buttonNode: any) => {
          // Store chain ID mapped to button element ID
          if (buttonNode.elementId) {
            (window as any).buttonChainRegistry[buttonNode.elementId] = 'flow_openaiAgentSDKNode-1763179222370_1766551025528';
            console.log(`🔗 Registered button chain: ${buttonNode.elementId} → flow_openaiAgentSDKNode-1763179222370_1766551025528`);
          }
        });
      }
      
      // Add memory management helper functions to window
      window.getConversationHistory  = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          const stored = storage.getItem(storageKey);
          return stored ? JSON.parse(stored) : [];
        } catch (error) {
          console.error('💭 Failed to get conversation history:', error);
          return [];
        }
      };
      
      window.clearConversationHistory = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          storage.removeItem(storageKey);
          console.log('💭 Cleared conversation history for:', storageKey);
          return true;
        } catch (error) {
          console.error('💭 Failed to clear conversation history:', error);
          return false;
        }
      };
      
      console.log("💭 Memory management helpers added to window:", ['getConversationHistory', 'clearConversationHistory']);
      
      // Dispatch events for component integration (especially tables)
      window.dispatchEvent(new CustomEvent('workflowCompleted', { 
        detail: { flowResults, chainId: 'flow_openaiAgentSDKNode-1763179222370_1766551025528' } 
      }));
      window.dispatchEvent(new CustomEvent('flowExecutionCompleted', { 
        detail: { flowResults, chainId: 'flow_openaiAgentSDKNode-1763179222370_1766551025528' } 
      }));
      console.log("📡 Dispatched workflow completion events");
    }
    
    console.log('✅ Flow chain completed successfully:', flowResults);
    return {
      success: true,
      results: flowResults,
      errors: flowErrors,
      chainId: 'flow_openaiAgentSDKNode-1763179222370_1766551025528'
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
    console.error('❌ Flow chain execution error:', error);
    return {
      success: false,
      results: flowResults,
      errors: [...flowErrors, errorMessage],
      chainId: 'flow_openaiAgentSDKNode-1763179222370_1766551025528'
    };
  }
};





// ==> FLOW CHAIN: flow_openaiAgentSDKNode-1763190181978_1766551025529 <==
// Chain: openaiAgentSDKNode

const executeFlowChain_flow_openaiAgentSDKNode_1763190181978_1766551025529 = async (initialData: any = {}): Promise<FlowResult> => {
  // CRITICAL FIX: Extract ONLY essential trigger fields to prevent stale data propagation
  // Do NOT spread entire initialData as it may contain stale nested references
  const cleanedInitialData: any = {
    buttonId: initialData?.buttonId,
    formId: initialData?.formId,
    formData: initialData?.formData ? { ...initialData.formData } : {},
    clickTimestamp: initialData?.clickTimestamp,
    trigger: initialData?.trigger
  };
  
  // CRITICAL: Create flowResults as a NEW object, not a reference to cleanedInitialData
  // This ensures complete isolation from any stale state
  const flowResults: Record<string, any> = {
    ...cleanedInitialData
  };
  const flowErrors: string[] = [];
  let currentResult: any = cleanedInitialData; // Use a mutable variable for passing data between steps
  
  // WORKFLOW ISOLATION FIX: Assign unique execution ID for this workflow run
  flowResults._executionId = `flow_openaiAgentSDKNode_1763190181978_1766551025529_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  console.log('🔗 Starting flow chain: flow_openaiAgentSDKNode-1763190181978_1766551025529');
  console.log('📊 Initial data:', initialData);
  console.log('🆔 Execution ID:', flowResults._executionId);

  try {

    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};




    // Enhanced Data Flow Helper Functions - CRITICAL: Define early to ensure availability in all contexts
    // This ensures dataFlow is available immediately after initialization for all node processors
    const dataFlow = {
      // Get current result
      current: () => flowResults.currentResult,

      // Get previous step result
      previous: () => flowResults.previousResult,

      // Get result by variable name
      get: (name: any) => {
        // First check at the top level (for form fields)
        if (flowResults[name] !== undefined) {
          return flowResults[name];
        }

        // Try specialized collections
        if (flowResults.variables && flowResults.variables[name]) {
          return flowResults.variables[name];
        }
        if (flowResults.inputs && flowResults.inputs[name]) {
          return flowResults.inputs[name];
        }
        if (flowResults.formData && flowResults.formData[name]) {
          return flowResults.formData[name];
        }
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[name]) {
          return flowResults.inboundEmailData[name];
        }
        if (flowResults.apiResponses && flowResults.apiResponses[name]) {
          return flowResults.apiResponses[name];
        }
        if (flowResults.calculations && flowResults.calculations[name]) {
          return flowResults.calculations[name];
        }
        if (flowResults.aiResponses && flowResults.aiResponses[name]) {
          return flowResults.aiResponses[name];
        }

        // Search in node results
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).displayName === name) {
            return (result as any).data;
          }
        }

        // Try case-insensitive matching as a last resort
        const lowerName = name.toLowerCase();

        // Check top level
        for (const key of Object.keys(flowResults)) {
          if (key.toLowerCase() === lowerName) {
            return flowResults[key];
          }
        }

        // Check form data
        if (flowResults.formData) {
          for (const key of Object.keys(flowResults.formData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.formData[key];
            }
          }
        }

        // Check inbound email data
        if (flowResults.inboundEmailData) {
          for (const key of Object.keys(flowResults.inboundEmailData)) {
            if (key.toLowerCase() === lowerName) {
              return flowResults.inboundEmailData[key];
            }
          }
        }

        return undefined;
      },

      // Get result by node ID
      getByNodeId: (nodeId: any) => {
        if (!flowResults.nodeResults || !flowResults.nodeResults[nodeId]) {
          return undefined;
        }

        const nodeResult = flowResults.nodeResults[nodeId];

        // For form nodes, return the data object which contains all form fields
        // This allows accessing specific fields like: dataFlow.getByNodeId("form-123").name
        if (nodeResult.nodeType === 'form' && nodeResult.data) {
          return nodeResult.data;
        }

        // CRITICAL FIX: For button nodes, return the buttonId for HTTP URL construction
        // This allows HTTP nodes to use {{dataFlow.getByNodeId("button-1761322615789")}} in URLs
        if (nodeResult.nodeType === 'button' && nodeResult.data && nodeResult.data.buttonId) {
          return nodeResult.data.buttonId;
        }

        // CRITICAL FIX: For conditional nodes, return the conditionResult as string for chaining
        // This allows subsequent condition nodes to properly reference previous condition results
        if (nodeResult.nodeType === 'if-conditional' && nodeResult.data && nodeResult.data.conditionResult !== undefined) {
          return String(nodeResult.data.conditionResult);
        }

        // CRITICAL FIX: For input nodes, return the actual user-provided value when possible
        if (nodeResult.nodeType === 'input' && nodeResult.data) {
          try {
            if (typeof nodeResult.data.get === 'function') {
              const inputValue = nodeResult.data.get();
              if (inputValue !== undefined && inputValue !== null) {
                return inputValue;
              }
            }
          } catch (error) {
            console.warn('dataFlow.getByNodeId input get() failed:', error);
          }

          if (nodeResult.data.currentValue !== undefined) {
            return nodeResult.data.currentValue;
          }

          if (nodeResult.data.value !== undefined) {
            return nodeResult.data.value;
          }
        }

        // Default: return the data property of the node
        return nodeResult.data;
      },

      // Get all variables of a specific type
      getByType: (nodeType: any) => {
        const results = [];
        for (const [nodeId, result] of Object.entries(flowResults.nodeResults || {})) {
          if ((result as any).nodeType === nodeType) {
            results.push((result as any).data);
          }
        }
        return results;
      },

      // Get last N results
      getLast: (n: any = 1) => {
        const allResults = Object.values(flowResults.nodeResults || {})
          .sort((a: any, b: any) => (b as any).stepNumber - (a as any).stepNumber);
        return n === 1 ? (allResults[0] as any)?.data : allResults.slice(0, n).map((r: any) => (r as any).data);
      },

      // Get all available variable names
      getAvailableNames: () => {
        const names = [];

        // Add from specialized collections
        if (flowResults.variables) names.push(...Object.keys(flowResults.variables));
        if (flowResults.inputs) names.push(...Object.keys(flowResults.inputs));
        if (flowResults.formData) names.push(...Object.keys(flowResults.formData));
        if (flowResults.inboundEmailData) names.push(...Object.keys(flowResults.inboundEmailData));
        if (flowResults.apiResponses) names.push(...Object.keys(flowResults.apiResponses));
        if (flowResults.calculations) names.push(...Object.keys(flowResults.calculations));
        if (flowResults.aiResponses) names.push(...Object.keys(flowResults.aiResponses));

        // Add display names
        for (const result of Object.values(flowResults.nodeResults || {})) {
          names.push((result as any).displayName);
        }

        // Convert Set to Array to avoid iteration issues
        const uniqueNames = new Set(names);
        const uniqueArray: string[] = [];
        uniqueNames.forEach(name => uniqueArray.push(name));
        return uniqueArray.sort();
      },
       // Get field by name - checks variables, flowResults, and input nodes
      getByFieldName: (fieldName: any) => {
        console.log('🔍 dataFlow.getByFieldName() called for:', fieldName);
        
        // First check variables (for Telegram inbound, email inbound, etc.)
        if (flowResults.variables && flowResults.variables[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.variables:', flowResults.variables[fieldName]);
          return flowResults.variables[fieldName];
        }
        
        // Check top-level flowResults
        if (flowResults[fieldName] !== undefined) {
          console.log('✅ Found in flowResults top-level:', flowResults[fieldName]);
          return flowResults[fieldName];
        }
        
        // Check window.dataFlow (for Telegram inbound data stored globally)
        if (typeof window !== 'undefined' && window.dataFlow && window.dataFlow[fieldName] !== undefined) {
          console.log('✅ Found in window.dataFlow:', window.dataFlow[fieldName]);
          return window.dataFlow[fieldName];
        }
        
        // Check inputs collection
        if (flowResults.inputs && flowResults.inputs[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inputs:', flowResults.inputs[fieldName]);
          return flowResults.inputs[fieldName];
        }
        
        // Check formData
        if (flowResults.formData && flowResults.formData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.formData:', flowResults.formData[fieldName]);
          return flowResults.formData[fieldName];
        }
        
        // Check inboundEmailData
        if (flowResults.inboundEmailData && flowResults.inboundEmailData[fieldName] !== undefined) {
          console.log('✅ Found in flowResults.inboundEmailData:', flowResults.inboundEmailData[fieldName]);
          return flowResults.inboundEmailData[fieldName];
        }
        
        // Fallback: Search for input nodes (existing behavior)
        if (flowResults.nodeResults) {
          for (const [nodeId, nodeResult] of Object.entries(flowResults.nodeResults)) {
            if ((nodeResult as any).nodeType === 'input') {
              const inputData = (nodeResult as any).data;
              
              // Check inputName from config
              if (inputData && typeof inputData === 'object') {
                const inputName = inputData.inputName || inputData.name || inputData.fieldName;
                if (inputName && inputName.toLowerCase() === String(fieldName).toLowerCase()) {
                  if (inputData.inputHandler) {
                    try {
                      const currentValue = inputData.inputHandler.get();
                      console.log('✅ Found in input node:', currentValue);
                      return currentValue;
                    } catch (error) {
                      console.warn('[WARNING] Error getting input value:', error);
                    }
                  }
                }
              }
            }
          }
        }
        
        console.warn('⚠️ Field not found:', fieldName);
        return undefined;
      }
    
    };

    // Make dataFlow available globally for this execution
    if (typeof window !== 'undefined') {
      (window as any).dataFlow = dataFlow;
      const existingDataFlow = (window as any).dataFlow || {};
      // Merge existing data with new dataFlow methods
      (window as any).dataFlow = {
        ...existingDataFlow,  // Preserve existing data (video-gen, image-gen results)
        ...dataFlow            // Add new dataFlow methods (getByNodeId, current, previous, etc.)
      };
      (window as any).getPreviousResult = dataFlow.previous;
      (window as any).getFlowResult = dataFlow.get;
      (window as any).getAllFlowResults = dataFlow.getAvailableNames;
    }
    
    // SECURITY: Store sanitized chain data for field resolution
    flowResults.originalChainData = {"id":"flow_openaiAgentSDKNode-1763190181978_1766551025529","nodes":[{"id":"openaiAgentSDKNode-1763190181978","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Important Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Important Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":1412.9253343510209,"y":864.9902289350088}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"openaiAgentSDKNode-1763190181978","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Important Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Important Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":1412.9253343510209,"y":864.9902289350088}},"endNode":{"id":"openaiAgentSDKNode-1763190181978","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Important Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Important Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":1412.9253343510209,"y":864.9902289350088}}};

    // Declare all step result variables
    let step1Result: any;



    // Initialize enhanced data flow system
    flowResults.nodeResults = {};
    flowResults.variables = {};
    flowResults.inputs = {};
    flowResults.apiResponses = {};
    flowResults.formData = {};
    flowResults.inboundEmailData = {};
    flowResults.calculations = {};
    flowResults.aiResponses = {};
    
    // Store original chain data for field resolution
    flowResults.originalChainData = {"id":"flow_openaiAgentSDKNode-1763190181978_1766551025529","nodes":[{"id":"openaiAgentSDKNode-1763190181978","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Important Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Important Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":1412.9253343510209,"y":864.9902289350088}}],"chainType":"linear","dataFlow":[],"edges":[{"id":"inbound-email-1763097045884-output-openaiAgentSDKNode-1763118348594","type":"bezier","style":{"stroke":"#ffffff","strokeWidth":2},"source":"inbound-email-1763097045884","target":"openaiAgentSDKNode-1763118348594","animated":false,"markerEnd":{"type":"arrowclosed","color":"#ffffff","width":6,"height":6}}],"startNode":{"id":"openaiAgentSDKNode-1763190181978","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Important Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Important Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":1412.9253343510209,"y":864.9902289350088}},"endNode":{"id":"openaiAgentSDKNode-1763190181978","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Important Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Important Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":1412.9253343510209,"y":864.9902289350088}}};
    
    // === WORKFLOW NODES: Make workflow nodes globally accessible for processors ===
    if (typeof window !== 'undefined') {
      // SECURITY: Store SANITIZED workflow nodes in window context (remove API keys)
      // Sanitize each node individually to ensure all sensitive data is removed
      const sanitizedNodes = [{"id":"openaiAgentSDKNode-1763190181978","style":{"padding":"0","borderColor":"#3b82f6","borderWidth":"2px","borderRadius":"8px"},"width":583,"config":{"type":"openaiAgentSDKNode","label":"Important Agent","model":"gpt-4","tools":[],"userId":"","agentId":"","nodeType":"openaiAgentSDK","noteText":"","sessionId":"","isAgentSDK":true,"max_tokens":1000,"memoryType":"simple","description":"OpenAI Agent SDK application","mcp_servers":[{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],"querySource":"","temperature":0.7,"user_prompt":"{{from}}\n{{subject}}\n{{text}}","agentSDKType":"agent_as_tool","credentialId":"***REDACTED***","enableMemory":false,"handoff_mode":"transfer_control","instructions":"You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING","tool_configs":{},"queryVariable":"","tool_settings":{"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},"variableInput":"","resultVariable":"sdkResult","selected_tools":[],"handoff_enabled":false,"handoff_targets":[],"memoryTableName":"","selectedDataSources":[],"auto_handoff_enabled":false,"isAgentSDKOrchestrator":false},"metadata":{"name":"openaiAgentSDKNode Node","label":"Important Agent","description":"OpenAI Agent SDK application"},"nodeType":"openaiAgentSDKNode","position":{"x":1412.9253343510209,"y":864.9902289350088}}];
      
      window.__currentWorkflowNodes = sanitizedNodes;
      window.__flowChainMetadata = {
        chainId: 'flow_openaiAgentSDKNode-1763190181978_1766551025529',
        currentChainNodes: sanitizedNodes,
        nodeCount: 1
      };
      console.log('🔗 Workflow nodes made available globally: 1 nodes');
    }
    
    // === CRITICAL: Import cross-chain data for data access ===
    // This allows the separate chain to access data from the main chain
    if (initialData.crossChainNodeResults) {
      console.log('🔗 Importing cross-chain node results for data access');
      flowResults.nodeResults = { ...flowResults.nodeResults, ...initialData.crossChainNodeResults };
      console.log('📋 Imported node results:', Object.keys(initialData.crossChainNodeResults));
    }
    if (initialData.crossChainFormData) {
      console.log('🔗 Importing cross-chain form data');
      flowResults.formData = { ...flowResults.formData, ...initialData.crossChainFormData };
      // Also make form fields accessible at top level
      Object.entries(initialData.crossChainFormData).forEach(([key, value]) => {
        flowResults[key] = value;
      });
      console.log('📋 Imported form data:', Object.keys(initialData.crossChainFormData));
    }
    if (initialData.crossChainVariables) {
      flowResults.variables = { ...flowResults.variables, ...initialData.crossChainVariables };
    }
    if (initialData.crossChainApiResponses) {
      flowResults.apiResponses = { ...flowResults.apiResponses, ...initialData.crossChainApiResponses };
    }
    if (initialData.crossChainAiResponses) {
      flowResults.aiResponses = { ...flowResults.aiResponses, ...initialData.crossChainAiResponses };
    }
    if (initialData.crossChainInputs) {
      flowResults.inputs = { ...flowResults.inputs, ...initialData.crossChainInputs };
    }
    if (initialData.crossChainCalculations) {
      flowResults.calculations = { ...flowResults.calculations, ...initialData.crossChainCalculations };
    }
    
    // === ENHANCED: Import inherited data structure ===
    if (initialData.inheritedData) {
      console.log('🔗 Importing inherited data structure');
      const inherited = initialData.inheritedData;
      
      // Merge all inherited collections
      if (inherited.nodeResults) {
        flowResults.nodeResults = { ...flowResults.nodeResults, ...inherited.nodeResults };
        console.log('📋 Inherited nodeResults:', Object.keys(inherited.nodeResults));
      }
      if (inherited.formData) {
        flowResults.formData = { ...flowResults.formData, ...inherited.formData };
        // Make form fields accessible at top level
        Object.entries(inherited.formData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      if (inherited.variables) flowResults.variables = { ...flowResults.variables, ...inherited.variables };
      if (inherited.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...inherited.apiResponses };
      if (inherited.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...inherited.aiResponses };
      if (inherited.inputs) flowResults.inputs = { ...flowResults.inputs, ...inherited.inputs };
      if (inherited.calculations) flowResults.calculations = { ...flowResults.calculations, ...inherited.calculations };
      
      // Set current and previous results from inherited data
      if (inherited.currentResult !== undefined) {
        flowResults.currentResult = inherited.currentResult;
        currentResult = inherited.currentResult;
        console.log('📋 Using inherited currentResult:', currentResult);
      }
      if (inherited.previousResult !== undefined) {
        flowResults.previousResult = inherited.previousResult;
      }
    }
    
    // === FALLBACK: Check global cross-chain data ===
    if (typeof window !== 'undefined') {
      // Check for globally stored cross-chain data
      if (window.mainChainFlowResults) {
        console.log('🌐 Found global main chain data, importing...');
        const mainChain = window.mainChainFlowResults;
        
        // CRITICAL FIX: Do NOT import nodeResults from previous executions
        // nodeResults is execution-specific and should be fresh for each run
        // Only import persistent data like formData, variables, etc.
        // if (mainChain.nodeResults && Object.keys(mainChain.nodeResults).length > 0) {
        //   flowResults.nodeResults = { ...flowResults.nodeResults, ...mainChain.nodeResults };
        //   console.log('📋 Imported global nodeResults:', Object.keys(mainChain.nodeResults));
        // }
        if (mainChain.formData && Object.keys(mainChain.formData).length > 0) {
          flowResults.formData = { ...flowResults.formData, ...mainChain.formData };
          Object.entries(mainChain.formData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
          console.log('📋 Imported global formData:', Object.keys(mainChain.formData));
        }
        if (mainChain.variables) flowResults.variables = { ...flowResults.variables, ...mainChain.variables };
        if (mainChain.apiResponses) flowResults.apiResponses = { ...flowResults.apiResponses, ...mainChain.apiResponses };
        if (mainChain.aiResponses) flowResults.aiResponses = { ...flowResults.aiResponses, ...mainChain.aiResponses };
        
        // Use router data if current result is not set
        if (!currentResult && mainChain.routerData) {
          currentResult = mainChain.routerData;
          flowResults.currentResult = mainChain.routerData;
          console.log('📋 Using global router data as currentResult');
        }
      }
    }
    
    console.log('📊 Final flowResults after cross-chain import:', {
      nodeResults: Object.keys(flowResults.nodeResults || {}),
      formData: Object.keys(flowResults.formData || {}),
      variables: Object.keys(flowResults.variables || {}),
      currentResult: !!currentResult
    });
    
    // Process form data if provided in the initial data
    // This ensures form fields are properly extracted and normalized
    if (initialData && typeof initialData === 'object') {
      // Check if we have form data in a nested property
      if (initialData.formData && typeof initialData.formData === 'object') {
        flowResults.formData = { ...initialData.formData };
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(initialData.formData).forEach(([key, value]) => {
          if (!key.startsWith('_')) {
            flowResults[key] = value;
          }
        });
        
        console.log('📝 Extracted form data from initialData.formData:', flowResults.formData);
      }
      
      // Check for form-like data at the top level
            const topLevelFormData: Record<string, any> = {};
      let hasFormFields = false;
      
      Object.entries(initialData).forEach(([key, value]) => {
        // Skip metadata and special properties
        if (!key.startsWith('_') && 
            key !== 'buttonId' && 
            key !== 'formId' && 
            key !== 'trigger' &&
            key !== 'clickTimestamp' &&
            key !== 'timestamp') {
          
          // Only include simple values that look like form fields
          if (typeof value === 'string' || 
              typeof value === 'number' || 
              typeof value === 'boolean') {
            topLevelFormData[key] = value;
            hasFormFields = true;
          }
        }
      });
      
      if (hasFormFields) {
        // Store in formData if not already set
        if (!flowResults.formData || Object.keys(flowResults.formData).length === 0) {
          flowResults.formData = topLevelFormData;
          console.log('📝 Extracted form-like data from top level:', topLevelFormData);
        }
        
        // Also make form fields accessible at the top level for template variables
        Object.entries(topLevelFormData).forEach(([key, value]) => {
          flowResults[key] = value;
        });
      }
      
      // Process inbound email data if provided in the initial data
      // This ensures email fields like subject, from, text are properly extracted and normalized
      if (initialData.subject || initialData.from || initialData.text || initialData.emailData) {
        console.log('📧 Processing inbound email data from initialData...');
        
        // Check if we have email data in a nested property
        if (initialData.emailData && typeof initialData.emailData === 'object') {
          flowResults.inboundEmailData = { ...initialData.emailData };
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(initialData.emailData).forEach(([key, value]) => {
            if (!key.startsWith('_')) {
              flowResults[key] = value;
            }
          });
          
          console.log('📧 Extracted email data from initialData.emailData:', flowResults.inboundEmailData);
        }
        
        // Check for email-like data at the top level
        const topLevelEmailData: Record<string, any> = {};
        let hasEmailFields = false;
        
        // Common email field names to look for
        const emailFields = ['subject', 'from', 'to', 'text', 'body', 'html', 'sender', 'recipient', 'message_id', 'timestamp'];
        
        Object.entries(initialData).forEach(([key, value]) => {
          // Check if this is an email field (case-insensitive)
          const isEmailField = emailFields.some(field => 
            key.toLowerCase() === field.toLowerCase() || 
            key.toLowerCase().includes(field.toLowerCase())
          );
          
          if (isEmailField && value !== undefined && value !== null) {
            topLevelEmailData[key] = value;
            hasEmailFields = true;
          }
        });
        
        if (hasEmailFields) {
          // Store in inboundEmailData if not already set
          if (!flowResults.inboundEmailData || Object.keys(flowResults.inboundEmailData).length === 0) {
            flowResults.inboundEmailData = topLevelEmailData;
            console.log('📧 Extracted email-like data from top level:', topLevelEmailData);
          }
          
          // Also make email fields accessible at the top level for template variables
          Object.entries(topLevelEmailData).forEach(([key, value]) => {
            flowResults[key] = value;
          });
        }
      }
    }
    
    // === STEP 1: OPENAIAGENTSDKNODE ===
    console.log('🔄 Executing step 1: openaiAgentSDKNode (You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING)');
    step1Result = currentResult; // Assign to pre-declared variable
    try {
      
    // Process with OpenAI Agent SDK (Single Input Mode)
    step1Result = '';
    
    // 🆕 EMBEDDED TARGET AGENT CONFIGURATIONS (for handoff)
    const targetAgentConfigs = {};
    
    try {
      // 🚫 CHECK: Skip if this node was already executed via handoff (CLIENT-SIDE ONLY)
      if (typeof window !== 'undefined' && window.__executedNodes && window.__executedNodes.has('openaiAgentSDKNode-1763190181978')) {
        console.log('⏭️ Skipping node (already executed via handoff):', 'openaiAgentSDKNode-1763190181978');
        
        // Get the result from dataFlow if available
        const existingResult = dataFlow.getByNodeId('openaiAgentSDKNode-1763190181978');
        if (existingResult) {
          step1Result = existingResult;
        } else {
          step1Result = 'Node already executed via handoff';
        }
        
        // Remove from executed set for next workflow run (CLIENT-SIDE ONLY)
        if (typeof window !== 'undefined' && window.__executedNodes) {
          window.__executedNodes.delete('openaiAgentSDKNode-1763190181978');
        }
      } else {
      let aiInput = '';
      
      
      // Single input processing (existing logic - UNCHANGED)
      
        // User has provided a custom prompt - use it and evaluate any dataFlow expressions
        let userPrompt = `{{from}}
{{subject}}
{{text}}`;
        const templateContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: null,
          previousResult: flowResults.previousResult,
          // 🔧 Enhanced template variable access (like Evolution Send node)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          // 🔧 Enhanced template variable access - ALL variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🔧 Fix [object Object] issue - Convert ANY object template variables to readable strings
        userPrompt = userPrompt.replace(/{{(w+)}}/g, (match, varName) => {
          const value = templateContext[varName];
          if (value && typeof value === 'object' && !varName.includes('.') && !varName.includes('(')) {
            return JSON.stringify(value, null, 2);
          }
          return match; // Let template engine handle complex expressions
        });
        
        try {
          if (userPrompt.includes('{{') && userPrompt.includes('}}')) {
            const templateResult = TemplateExpressionEngine.processTemplate(userPrompt, templateContext);
            aiInput = String(templateResult);
          } else if (userPrompt.includes('dataFlow.')) {
            const evaluatedResult = TemplateExpressionEngine.evaluate(userPrompt, templateContext, { allowFunctions: true });
            aiInput = (evaluatedResult !== undefined && evaluatedResult !== null) ? evaluatedResult : userPrompt;
          } else {
            aiInput = userPrompt;
          }
        } catch (templateError) {
          aiInput = userPrompt;
        }
      
    
      
      // Ensure aiInput is a string and not empty
      if (typeof aiInput !== 'string') {
        aiInput = JSON.stringify(aiInput, null, 2);
      }
      
      if (!aiInput || aiInput.trim() === '') {
        aiInput = 'Please provide assistance.';
      }
        
        // 📚 RETRIEVE AGENT MEMORY (if enabled)
        let memoryMessages = [];
        if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
          try {
            const agentId = 'agent-1766551025540';
            const userId = 'user-1766551025540';
            const memoryStorageType = 'simple';
            
            if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
                memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
                memoryStorageType === 'longterm_vector') {
              // Supabase/PostgreSQL memory retrieval
              try {
                const memoryResponse = await fetch('/api/memory', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    operation: 'retrieve',
                    user_id: userId,
                    agent_id: agentId,
                    memory_type: memoryStorageType,
                    limit: 10
                  })
                });
                
                if (memoryResponse.ok) {
                  const memoryData = await memoryResponse.json();
                  if (memoryData.success && memoryData.data && Array.isArray(memoryData.data)) {
                    memoryMessages = memoryData.data.flatMap(item => {
                      const messages = [];
                      if (item.input_data) {
                        messages.push({
                          role: item.input_data.role || 'user',
                          content: item.input_data.content
                        });
                      }
                      if (item.output_data) {
                        messages.push({
                          role: item.output_data.role || 'assistant',
                          content: item.output_data.content
                        });
                      }
                      return messages;
                    });
                  }
                }
              } catch (supabaseError) {
                console.error('❌ Memory retrieval error:', supabaseError);
              }
            } else {
              // Browser storage memory retrieval
              const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
              const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
              
              const storedMemory = storage.getItem(memoryStorageKey);
              if (storedMemory) {
                const conversations = JSON.parse(storedMemory);
                const recentConversations = conversations.slice(-10);
                memoryMessages = recentConversations.map(conv => ({
                  role: conv.role,
                  content: conv.content
                }));
              }
            }
          } catch (memoryError) {
            console.error('❌ Failed to retrieve memory:', memoryError);
          }
        }
        
        // Define mediaCheckContext for media content checking (renamed to avoid global templateContext conflict)
        const mediaCheckContext = {
          ...flowResults,
          dataFlow: dataFlow,
          currentResult: flowResults.currentResult,
          previousResult: flowResults.previousResult,
          // Enhanced template variable access (like Image Gen and Smart Agent nodes)
          evolutionReceiveResult: flowResults.variables?.evolutionReceiveResult || flowResults.evolutionReceiveResult || {},
          aiAgentResult: flowResults.variables?.aiAgentResult || {},
          smartAgentResult: flowResults.variables?.smartAgentResult || {},
          // All variables from flowResults
          ...flowResults.variables,
          variables: flowResults.variables || {}
        };
        
        // 🆕 Check for media content to send to AI
        let hasMediaContent = false;
        let mediaContent = null;
        
        // Check for media in evolutionReceiveResult
        if (mediaCheckContext.evolutionReceiveResult?.mediaBase64 && mediaCheckContext.evolutionReceiveResult?.mimeType) {
          const mimeType = mediaCheckContext.evolutionReceiveResult.mimeType;
          if (mimeType.startsWith('image/')) {
            hasMediaContent = true;
            mediaContent = {
              type: 'image',
              mimeType: mimeType,
              base64: mediaCheckContext.evolutionReceiveResult.mediaBase64,
              dataUrl: mediaCheckContext.evolutionReceiveResult.mediaDataUrl
            };
          }
        }
        
        // SECURITY: Load API key from environment variables instead of embedding it
      let effectiveApiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY || '';
      
      // If using stored credential, fetch from backend
      if (false && 'f8d21d16-cb2d-4319-bf3b-4f5a729e8874') {
        try {
          const credentialResponse = await fetch(`${process.env.NEXT_PUBLIC_SIMPLITA_BACKEND_URL || 'http://localhost:8000'}/api/credentials/${encodeURIComponent('f8d21d16-cb2d-4319-bf3b-4f5a729e8874')}/data`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${process.env.SIMPLITA_API_TOKEN || 'generated-app-token'}`,
              'X-User-ID': process.env.SIMPLITA_USER_ID || 'anonymous'
            }
          });

          if (credentialResponse.ok) {
            const credentialData = await credentialResponse.json();
            if (credentialData && credentialData.api_key) {
              effectiveApiKey = credentialData.api_key;
            }
          }
        } catch (credError) {
          console.error('❌ OpenAI SDK: Error retrieving stored credential:', credError);
        }
      }
      
      // 🔧 Use absolute URL for server-side compatibility
      const apiUrl = typeof window !== 'undefined' ? '/api/openai-agent-sdk' : `${process.env.NEXT_PUBLIC_BASE_URL || process.env.VERCEL_URL || process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/api/openai-agent-sdk`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: aiInput,
         user_prompt: `{{from}}
{{subject}}
{{text}}`,

          model: 'gpt-4',
          instructions: `You are an email classifier.

Your ONLY task is to extract Important Emails.

An Important Email must clearly belong to one of these categories:
- Work-related communication
- Business or client communication
- Official updates from a company or organization
- Internal office communication or team updates
- Meeting requests, follow-ups, or task-related instructions
- Notifications requiring action (review, approval, submission, reminder)
- Professional conversations with a formal or semi-formal tone

Important Emails often contain:
action required, update, reminder, meeting, schedule, follow-up,
please review, approval needed, document attached, deadline, report,
team, project, assignment, policy update, company notice.

DO NOT classify as important:
- Job platform emails (job alerts, applications, interviews)
- Promotional or marketing emails (sales, offers, discounts)
- Birthday or personal greetings
- Messages from friends or family
- Bank, OTP, password reset, or verification emails
- System-generated notifications unrelated to work
- Newsletters or marketing announcements
- Any email that does not have work, business, or official purpose

INPUT:
From: {{from}}
Subject: {{subject}}
Body: {{text}}

OUTPUT:
If the email IS important, output EXACTLY the following:
From: [sender name only, remove the email address, no special characters]
Subject: {{subject}}
Message Summary: [one-line summary of the work or official message]
This output MUST be sent using the MCP Server tool slack send. 

If the email is NOT important, return NOTHING.
No extra text, no labels, no spaces.

IMPORTANT:
- Do NOT output any special characters or angle brackets.
- Output must be clean plain text only.
Plain text only, compatible with MCP Slack Send.
If the email is NOT personal, output NOTHING`,
          temperature: 0.7,
          max_tokens: 1000,
          apiKey: effectiveApiKey,
          agentType: 'agent_as_tool',
          selected_tools: [],
          tool_configs: {},
          tool_settings: {"tool_timeout_ms":30000,"error_handling_mode":"graceful","enable_parallel_execution":false,"max_tool_calls_per_request":5},
          mcp_servers: [{"id":"custom_mcp_1766550611687","url":"https://send-slack.mcp.simplita.app/mcp","name":"slacksend","enabled":true,"description":"Custom MCP Server"}],
          handoff_enabled: false,
          handoff_targets: [],
          // 📚 Include memory context if available
          memoryMessages: memoryMessages,
          enableMemory: false,
          memoryType: 'simple'
        })
      });
      
      if (!response.ok) {
        throw new Error('OpenAI Agent SDK API error: ' + response.status + ' - ' + response.statusText);
      }
      
      const result = await response.json();
      
      // ✅ AUTO-HANDOFF: Detect next directly connected agent (CLIENT-SIDE ONLY)
      if (false && !result.handoff && typeof window !== 'undefined') {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763190181978');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'transfer_control';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // 📚 STORE AGENT MEMORY (if enabled and response contains data)
      if (false && 'simple' !== 'none' && typeof window !== 'undefined') {
        try {
          const agentId = 'agent-1766551025540';
          const userId = 'user-1766551025540';
          const sessionId = 'session-1766551025540';
          const memoryStorageType = 'simple';
          
          const conversationData = {
            user_message: { role: 'user', content: aiInput },
            assistant_message: { role: 'assistant', content: result.content || result.text || result.message || '' }
          };
          
          if (memoryStorageType === 'supabase_vector' || memoryStorageType === 'postgres_chat' || 
              memoryStorageType === 'longterm_semantic' || memoryStorageType === 'semantic_longterm' || 
              memoryStorageType === 'longterm_vector') {
            // Supabase/PostgreSQL memory storage
            try {
              const memoryStoreResponse = await fetch('/api/memory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  operation: 'store',
                  user_id: userId,
                  agent_id: agentId,
                  session_id: sessionId,
                  memory_type: memoryStorageType,
                  interaction_type: 'conversation',
                  input_data: conversationData.user_message,
                  output_data: conversationData.assistant_message,
                  metadata: {
                    model: 'gpt-4',
                    agentType: 'agent_as_tool',
                    timestamp: new Date().toISOString()
                  }
                })
              });
              
              if (!memoryStoreResponse.ok) {
                console.warn('⚠️ Failed to store memory in Supabase:', memoryStoreResponse.status);
              }
            } catch (supabaseStoreError) {
              console.error('❌ Supabase memory storage error:', supabaseStoreError);
            }
          } else {
            // Browser storage memory
            const memoryStorageKey = `openai_agent_memory_${agentId}_${userId}`;
            const storage = memoryStorageType === 'session' ? sessionStorage : localStorage;
            
            const existingData = storage.getItem(memoryStorageKey);
            const conversations = existingData ? JSON.parse(existingData) : [];
            
            // Add new conversation data
            conversations.push(conversationData.user_message);
            conversations.push(conversationData.assistant_message);
            
            // Apply limit (keep last 100 messages)
            if (conversations.length > 100) {
              conversations.splice(0, conversations.length - 100);
            }
            
            // Store back to browser storage
            storage.setItem(memoryStorageKey, JSON.stringify(conversations));
          }
        } catch (memoryError) {
          console.error('❌ Failed to store memory:', memoryError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        try {
          // Get workflow graph from window (client-side only)
          const workflowNodes = (window as any).__currentWorkflowNodes || [];
          const workflowEdges = (window as any).__currentWorkflowEdges || [];
          
          // Find edges from current node
          const outgoingEdges = workflowEdges.filter((e: any) => e.source === 'openaiAgentSDKNode-1763190181978');
          
          // Find directly connected OpenAI Agent SDK nodes
          const nextAgentNodes = outgoingEdges
            .map((edge: any) => workflowNodes.find((n: any) => n.id === edge.target))
            .filter((n: any) => n && n.type === 'openaiAgentSDKNode');
          
          if (nextAgentNodes.length === 1) {
            const nextAgent = nextAgentNodes[0];
            console.log('🔄 Auto-handoff to:', nextAgent.data?.label || nextAgent.id);
            
            // Trigger auto-handoff by setting handoff flag
            result.handoff = true;
            result.execution_mode = 'transfer_control';
            result.target_agent = nextAgent.id;
            result.reason = 'Auto-handoff to next agent';
            result.context_summary = 'Automatically transferring to next connected agent';
            result.message = result.content || result.text || 'Agent response';
          } else if (nextAgentNodes.length > 1) {
            console.warn('⚠️ Auto-handoff skipped: Multiple agents connected');
          }
        } catch (autoHandoffError) {
          console.warn('⚠️ Auto-handoff detection failed:', autoHandoffError);
        }
      }
      
      // ✅ CHECK FOR AGENT HANDOFF
      if (result.handoff && result.target_agent) {
        console.log('🔄 Handoff to:', result.target_agent);
        
        const handoffThreadId = result.threadId;
        const handoffSessionId = result.sessionId;
        const execution_mode = result.execution_mode || 'transfer_control';
        
        const targetConfig = (targetAgentConfigs as Record<string, any>)[result.target_agent];
        
        if (!targetConfig) {
          console.error('❌ Target agent not found:', result.target_agent);
          throw new Error(`Target agent configuration not found: ${result.target_agent}. Available: ${Object.keys(targetAgentConfigs).join(', ')}`);
        }
        
        // 🔄 AUTO-EXECUTE TARGET AGENT with shared thread
        try {
          // 🔧 Construct absolute URL for both client and server contexts
          let apiUrl = '/api/openai-agent-sdk';
          if (typeof window === 'undefined') {
            // Server-side: Use environment variables to build absolute URL
            const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                           process.env.VERCEL_URL || 
                           process.env.NEXT_PUBLIC_FRONTEND_URL || 
                           'http://localhost:3000';
            // Ensure protocol is included
            const protocol = baseUrl.startsWith('http') ? '' : 'https://';
            apiUrl = `${protocol}${baseUrl}/api/openai-agent-sdk`;
          }
          
          // Call the target agent with THE TARGET'S OWN CONFIGURATION
          const targetAgentResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: `Context from previous agent: ${result.context_summary || 'No context provided'}`,
              user_prompt: targetConfig.user_prompt || '',
              model: targetConfig.model || 'gpt-4o',
              instructions: targetConfig.instructions || 'You are a helpful AI assistant.',
              temperature: targetConfig.temperature || 0.7,
              max_tokens: targetConfig.max_tokens || 1000,
              apiKey: effectiveApiKey,
              agentType: targetConfig.agentType || targetConfig.agentSDKType || 'agent_as_tool',
              selected_tools: targetConfig.selected_tools || [],
              tool_configs: targetConfig.tool_configs || {},
              tool_settings: targetConfig.tool_settings || {},
              mcp_servers: targetConfig.mcp_servers || [],
              // 🔄 CRITICAL: Pass shared thread for conversation continuity
              threadId: handoffThreadId,
              sessionId: handoffSessionId,
              // Indicate this is a handoff continuation
              isHandoffContinuation: true,
              handoffReason: result.reason,
              handoffContext: result.context_summary
            })
          });
          
          if (targetAgentResponse.ok) {
            const targetAgentResult = await targetAgentResponse.json();
            
            // ✅ DIFFERENT BEHAVIOR BASED ON EXECUTION MODE
            if (execution_mode === 'transfer_control') {
              // TRUE HANDOFF: Only target result, workflow continues from target
              step1Result = targetAgentResult.content || targetAgentResult.text || targetAgentResult.message || 'Target agent response';
            } else {
              // TOOL CALL MODE: Combine results, orchestrator continues
              step1Result = {
                handoffCompleted: true,
                execution_mode: 'tool_call',
                sourceAgent: result.message,
                targetAgent: result.target_agent,
                targetAgentResult: targetAgentResult.content || targetAgentResult.text || targetAgentResult.message,
                handoffReason: result.reason,
                handoffContext: result.context_summary,
                sharedThreadId: handoffThreadId,
                sharedSessionId: handoffSessionId,
                finalMessage: `Agent tool call completed: ${result.target_agent} returned: ${targetAgentResult.content || targetAgentResult.text || 'Result received'}`
              };
            }
            
            // 🚫 CRITICAL: Mark target agent as already executed to prevent double execution (CLIENT-SIDE ONLY)
            if (typeof window !== 'undefined') {
              if (!window.__executedNodes) {
                window.__executedNodes = new Set();
              }
              window.__executedNodes.add(result.target_agent);
              
              // Signal workflow to continue from target's output for transfer control (CLIENT-SIDE ONLY)
              if (execution_mode === 'transfer_control') {
                window.__workflowContinueFrom = result.target_agent;
              }
            } else {
              console.log('ℹ️ Server-side execution: Skipping window-based node tracking');
            }
          } else {
            console.error('❌ Target agent execution failed:', targetAgentResponse.status);
            step1Result = {
              handoffCompleted: false,
              sourceAgent: result.message,
              targetAgent: result.target_agent,
              error: 'Target agent execution failed',
              handoffReason: result.reason
            };
          }
        } catch (handoffError) {
          console.error('❌ Handoff error:', handoffError);
          step1Result = {
            handoffCompleted: false,
            sourceAgent: result.message,
            targetAgent: result.target_agent,
            error: handoffError instanceof Error ? handoffError.message : String(handoffError),
            handoffReason: result.reason
          };
        }
      } else {
        // Normal response (no handoff)
        step1Result = result.content || result.text || result.message || 'AI response received';
      }
      
      // 📊 CRITICAL: Store result in flowResults for dataFlow access
      if (!flowResults.nodeResults) flowResults.nodeResults = {};
      if (!flowResults.variables) flowResults.variables = {};
      if (!flowResults.aiResponses) flowResults.aiResponses = {};
      
      // Generate safe display name at runtime
      const displayName = "Important_Agent";
      
      // Store in nodeResults for dataFlow.getByNodeId()
      flowResults.nodeResults['openaiAgentSDKNode-1763190181978'] = {
        nodeId: 'openaiAgentSDKNode-1763190181978',
        nodeType: 'openaiAgentSDKNode',
        stepNumber: (flowResults.stepCounter || 0) + 1,
        displayName: displayName,
        data: step1Result,
        timestamp: new Date().toISOString(),
        success: true
      };
      
      // Store in variables for dataFlow.get()
      flowResults.variables[displayName] = step1Result;
      flowResults.aiResponses[displayName] = step1Result;
      
      // Store at top-level for direct access
      flowResults[displayName] = step1Result;
      
      // Update current/previous for dataFlow.current() and dataFlow.previous()
      flowResults.previousResult = flowResults.currentResult;
      flowResults.currentResult = step1Result;
      
      // Increment step counter
      flowResults.stepCounter = (flowResults.stepCounter || 0) + 1;
      }
      
    } catch (error) {
      console.error('💥 OpenAI Agent SDK error:', error);
      step1Result = 'Error: ' + (error instanceof Error ? error.message : String(error));
      flowErrors.push('OpenAI Agent SDK error in node openaiAgentSDKNode-1763190181978: ' + (error instanceof Error ? error.message : String(error)));
    }
    
      
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763190181978'] = {
      nodeId: 'openaiAgentSDKNode-1763190181978',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 1,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763190181978',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763190181978'] = step1Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763190181978'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763190181978'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763190181978'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763190181978 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763190181978"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763190181978")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763190181978")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
      
      // Update currentResult for next step - respect processor-specific currentResult if set
      if (flowResults.currentResult !== undefined && 
          flowResults.stepCounter > 0) {
        // Processor updated flowResults.currentResult, use that (e.g., HTTP processor sets responseData)
        currentResult = flowResults.currentResult;
        console.log('🔄 Using processor-specific currentResult for next step');
      } else {
        // Fallback to step result wrapper
        currentResult = step1Result;
        console.log('🔄 Using step result wrapper for next step');
      }
    } catch (stepError) {
      const stepErrorMessage = stepError instanceof Error ? stepError.message : String(stepError) || 'Unknown step error';
      console.error('❌ Error in step 1 (openaiAgentSDKNode):', stepError);
      flowErrors.push(`Step 1 (openaiAgentSDKNode): ${stepErrorMessage}`);
      
      // Set a default result for this step to avoid undefined references
      step1Result = { 
        error: true, 
        message: stepErrorMessage, 
        nodeType: 'openaiAgentSDKNode',
        nodeId: 'openaiAgentSDKNode-1763190181978',
        stepNumber: 1
      };
      
      currentResult = step1Result; // Update currentResult even on error
      
      // Store error result in enhanced data flow system
      
    // Store result in enhanced data flow system
    flowResults.nodeResults['openaiAgentSDKNode-1763190181978'] = {
      nodeId: 'openaiAgentSDKNode-1763190181978',
      nodeType: 'openaiAgentSDKNode',
      stepNumber: 1,
      displayName: 'openaiSDKResult_openaiAgentSDKNode_1763190181978',
      data: step1Result,
      timestamp: new Date().toISOString(),
      success: true
    };
    
    // Store in specialized collection using dynamic variable name
    flowResults.aiResponses['openaiSDKResult_openaiAgentSDKNode_1763190181978'] = step1Result;
    
    // Store at top-level for direct access (CRITICAL for HTTP nodes)
    // CRITICAL FIX: Don't overwrite if the processor already set a formatted result
    // This is especially important for Bolna AI which stores formattedResult before polling
    if (!flowResults['openaiSDKResult_openaiAgentSDKNode_1763190181978'] || typeof flowResults['openaiSDKResult_openaiAgentSDKNode_1763190181978'] === 'undefined') {
      flowResults['openaiSDKResult_openaiAgentSDKNode_1763190181978'] = step1Result;
    }
    
    // Update previous result
    flowResults.previousResult = flowResults.currentResult;
    
    console.log('📊 Enhanced storage: openaiSDKResult_openaiAgentSDKNode_1763190181978 (openaiAgentSDKNode) available as:');
    console.log('  - flowResults["openaiSDKResult_openaiAgentSDKNode_1763190181978"] // Direct access');
    console.log('  - dataFlow.get("openaiSDKResult_openaiAgentSDKNode_1763190181978")');
    console.log('  - dataFlow.getByNodeId("openaiAgentSDKNode-1763190181978")');
    console.log('  - dataFlow.current() // Current result');
    console.log('  - dataFlow.previous() // Previous result');
    
    }

    // Make flowResults globally available for table and other component access
    if (typeof window !== 'undefined') {
      (window as any).flowResults = flowResults;
      console.log('🌐 Made flowResults globally available:', flowResults);
          // Store as main chain data for cross-chain access
      (window as any).mainChainFlowResults = flowResults;
      console.log('🔗 Stored main chain data for cross-chain access:', {
        nodeResults: Object.keys(flowResults.nodeResults || {}),
        aiResponses: Object.keys(flowResults.aiResponses || {}),
        variables: Object.keys(flowResults.variables || {})
      });
      
      // CRITICAL: Initialize button chain registry for dynamic chain ID lookup
      if (!(window as any).buttonChainRegistry) {
        (window as any).buttonChainRegistry = {};
      }
      
      // Register this chain if it's a button-triggered chain
      if ('flow_openaiAgentSDKNode-1763190181978_1766551025529'.includes('button')) {
        // Extract button node information from chain
        const buttonNodes = Object.values(flowResults.nodeResults || {}).filter(
          (result: any) => result.nodeType === 'button'
        );
        
        buttonNodes.forEach((buttonNode: any) => {
          // Store chain ID mapped to button element ID
          if (buttonNode.elementId) {
            (window as any).buttonChainRegistry[buttonNode.elementId] = 'flow_openaiAgentSDKNode-1763190181978_1766551025529';
            console.log(`🔗 Registered button chain: ${buttonNode.elementId} → flow_openaiAgentSDKNode-1763190181978_1766551025529`);
          }
        });
      }
      
      // Add memory management helper functions to window
      window.getConversationHistory  = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          const stored = storage.getItem(storageKey);
          return stored ? JSON.parse(stored) : [];
        } catch (error) {
          console.error('💭 Failed to get conversation history:', error);
          return [];
        }
      };
      
      window.clearConversationHistory = function(agentId :any, userId :any, storageType = 'simple') {
        try {
          const storage = storageType === 'session' ? sessionStorage : localStorage;
          const storageKey = `smart_agent_memory_${agentId}_${userId}`;
          storage.removeItem(storageKey);
          console.log('💭 Cleared conversation history for:', storageKey);
          return true;
        } catch (error) {
          console.error('💭 Failed to clear conversation history:', error);
          return false;
        }
      };
      
      console.log("💭 Memory management helpers added to window:", ['getConversationHistory', 'clearConversationHistory']);
      
      // Dispatch events for component integration (especially tables)
      window.dispatchEvent(new CustomEvent('workflowCompleted', { 
        detail: { flowResults, chainId: 'flow_openaiAgentSDKNode-1763190181978_1766551025529' } 
      }));
      window.dispatchEvent(new CustomEvent('flowExecutionCompleted', { 
        detail: { flowResults, chainId: 'flow_openaiAgentSDKNode-1763190181978_1766551025529' } 
      }));
      console.log("📡 Dispatched workflow completion events");
    }
    
    console.log('✅ Flow chain completed successfully:', flowResults);
    return {
      success: true,
      results: flowResults,
      errors: flowErrors,
      chainId: 'flow_openaiAgentSDKNode-1763190181978_1766551025529'
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
    console.error('❌ Flow chain execution error:', error);
    return {
      success: false,
      results: flowResults,
      errors: [...flowErrors, errorMessage],
      chainId: 'flow_openaiAgentSDKNode-1763190181978_1766551025529'
    };
  }
};






// === MASTER FLOW EXECUTOR ===
const executeAllFlows = async (triggerData: any = {}, specificChainId: string | null = null): Promise<any> => {
  const results: Record<string, any> = {};
  const startTime = Date.now();

  
  // Initialize global execution tracker if not exists
  if (typeof window !== 'undefined' && !window._globalExecutionTracker) {
    window._globalExecutionTracker = {
      executedFlows: new Set(),
      isAutoExecutionComplete: false,
      executionInProgress: false
    };
  }
  
  // Check if this specific chain has already been executed recently
  if (typeof window !== 'undefined' && window._globalExecutionTracker && specificChainId) {
    const triggerType = triggerData?.trigger || 'manual';
    const executionKey = specificChainId + '_' + triggerType;
    if (window._globalExecutionTracker.executedFlows.has(executionKey)) {
      console.log('🛑 Chain already executed recently, skipping to prevent double execution:', executionKey);
      return { 
        success: false, 
        skipped: true, 
        reason: 'Already executed recently',
        chainId: specificChainId 
      };
    }
    window._globalExecutionTracker.executedFlows.add(executionKey);
    
    // Clean up old execution records after 5 seconds to allow re-execution
    setTimeout(() => {
      if (window._globalExecutionTracker) {
        window._globalExecutionTracker.executedFlows.delete(executionKey);
      }
    }, 5000);
  }

  console.log('🎯 Executing flow system...');
  if (specificChainId) {
    console.log('🎪 Running specific chain: ' + specificChainId);
  } else {
    console.log('🎪 Running all flow chains');
  }
  
  // Check if this is a page-load trigger
  const isPageLoadTrigger = triggerData && (triggerData.trigger === 'page-load' || triggerData.trigger === 'page-load-retry');
  if (isPageLoadTrigger) {
    const currentPath = triggerData.pageId || (typeof window !== 'undefined' ? window.location.pathname : '/');
    console.log('🔍 Page load trigger detected for path:', currentPath);
  }
  
  
  // Execute flow_inbound-email-1763097045884_1766551025527
  if (!specificChainId || specificChainId === 'flow_inbound-email-1763097045884_1766551025527') {
    
    // ✅ CRITICAL FIX: This is a webhook-triggered workflow (inbound-email)
    // It should ONLY execute when triggered by its specific webhook, NOT on page load
    if (triggerData && triggerData.trigger === 'page-load') {
      console.log('⏭️ Skipping webhook workflow flow_inbound-email-1763097045884_1766551025527 - not triggered by webhook (trigger: inbound-email)');
      results['flow_inbound-email-1763097045884_1766551025527'] = { 
        success: false, 
        skipped: true, 
        reason: 'Webhook workflow should not run on page load',
        chainId: 'flow_inbound-email-1763097045884_1766551025527',
        webhookType: 'inbound-email',
        actualTrigger: triggerData.trigger
      };
      // Don't return here, just skip to next workflow
    } else {
      // Proceed with webhook workflow execution
      try {
        console.log('🔗 Executing webhook flow chain: flow_inbound-email-1763097045884_1766551025527');
        const result_flow_inbound_email_1763097045884_1766551025527 = await executeFlowChain_flow_inbound_email_1763097045884_1766551025527(triggerData);
        results['flow_inbound-email-1763097045884_1766551025527'] = result_flow_inbound_email_1763097045884_1766551025527;
        
        if (result_flow_inbound_email_1763097045884_1766551025527.success) {
          console.log('✅ Chain flow_inbound-email-1763097045884_1766551025527 completed successfully');
        } else {
          console.error('❌ Chain flow_inbound-email-1763097045884_1766551025527 failed:', result_flow_inbound_email_1763097045884_1766551025527.errors);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
        console.error('💥 Error executing flow flow_inbound-email-1763097045884_1766551025527:', error);
        results['flow_inbound-email-1763097045884_1766551025527'] = { success: false, error: errorMessage, chainId: 'flow_inbound-email-1763097045884_1766551025527', results: {}, errors: [errorMessage] };
      }
    }
  }

  // Execute flow_openaiAgentSDKNode-1763097052561_1766551025528
  if (!specificChainId || specificChainId === 'flow_openaiAgentSDKNode-1763097052561_1766551025528') {
    
    // ✅ CRITICAL FIX: Button/Form workflows should NOT auto-execute on page load
    // They should only execute when explicitly triggered (button click, form submit, etc.)
    const isButtonOrFormChain = ['button', 'form'].includes('openaiAgentSDKNode');
    const isPageLoadTrigger = triggerData && triggerData.trigger === 'page-load';
    
    if (isButtonOrFormChain && isPageLoadTrigger && !specificChainId) {
      console.log('⏭️ Skipping button/form workflow flow_openaiAgentSDKNode-1763097052561_1766551025528 - should not auto-execute on page load (trigger: openaiAgentSDKNode)');
      results['flow_openaiAgentSDKNode-1763097052561_1766551025528'] = { 
        success: false, 
        skipped: true, 
        reason: 'Button/Form workflow should not run on page load',
        chainId: 'flow_openaiAgentSDKNode-1763097052561_1766551025528',
        triggerType: 'openaiAgentSDKNode',
        actualTrigger: triggerData.trigger
      };
      // Don't return here, just skip to next workflow
    } else {
      // Proceed with workflow execution
      try {
        console.log('🔗 Executing flow chain: flow_openaiAgentSDKNode-1763097052561_1766551025528');
        const result_flow_openaiAgentSDKNode_1763097052561_1766551025528 = await executeFlowChain_flow_openaiAgentSDKNode_1763097052561_1766551025528(triggerData);
        results['flow_openaiAgentSDKNode-1763097052561_1766551025528'] = result_flow_openaiAgentSDKNode_1763097052561_1766551025528;
        
        if (result_flow_openaiAgentSDKNode_1763097052561_1766551025528.success) {
          console.log('✅ Chain flow_openaiAgentSDKNode-1763097052561_1766551025528 completed successfully');
        } else {
          console.error('❌ Chain flow_openaiAgentSDKNode-1763097052561_1766551025528 failed:', result_flow_openaiAgentSDKNode_1763097052561_1766551025528.errors);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
        console.error('💥 Error executing flow flow_openaiAgentSDKNode-1763097052561_1766551025528:', error);
        results['flow_openaiAgentSDKNode-1763097052561_1766551025528'] = { success: false, error: errorMessage, chainId: 'flow_openaiAgentSDKNode-1763097052561_1766551025528', results: {}, errors: [errorMessage] };
      }
    }
  }

  // Execute flow_openaiAgentSDKNode-1763179222370_1766551025528
  if (!specificChainId || specificChainId === 'flow_openaiAgentSDKNode-1763179222370_1766551025528') {
    
    // ✅ CRITICAL FIX: Button/Form workflows should NOT auto-execute on page load
    // They should only execute when explicitly triggered (button click, form submit, etc.)
    const isButtonOrFormChain = ['button', 'form'].includes('openaiAgentSDKNode');
    const isPageLoadTrigger = triggerData && triggerData.trigger === 'page-load';
    
    if (isButtonOrFormChain && isPageLoadTrigger && !specificChainId) {
      console.log('⏭️ Skipping button/form workflow flow_openaiAgentSDKNode-1763179222370_1766551025528 - should not auto-execute on page load (trigger: openaiAgentSDKNode)');
      results['flow_openaiAgentSDKNode-1763179222370_1766551025528'] = { 
        success: false, 
        skipped: true, 
        reason: 'Button/Form workflow should not run on page load',
        chainId: 'flow_openaiAgentSDKNode-1763179222370_1766551025528',
        triggerType: 'openaiAgentSDKNode',
        actualTrigger: triggerData.trigger
      };
      // Don't return here, just skip to next workflow
    } else {
      // Proceed with workflow execution
      try {
        console.log('🔗 Executing flow chain: flow_openaiAgentSDKNode-1763179222370_1766551025528');
        const result_flow_openaiAgentSDKNode_1763179222370_1766551025528 = await executeFlowChain_flow_openaiAgentSDKNode_1763179222370_1766551025528(triggerData);
        results['flow_openaiAgentSDKNode-1763179222370_1766551025528'] = result_flow_openaiAgentSDKNode_1763179222370_1766551025528;
        
        if (result_flow_openaiAgentSDKNode_1763179222370_1766551025528.success) {
          console.log('✅ Chain flow_openaiAgentSDKNode-1763179222370_1766551025528 completed successfully');
        } else {
          console.error('❌ Chain flow_openaiAgentSDKNode-1763179222370_1766551025528 failed:', result_flow_openaiAgentSDKNode_1763179222370_1766551025528.errors);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
        console.error('💥 Error executing flow flow_openaiAgentSDKNode-1763179222370_1766551025528:', error);
        results['flow_openaiAgentSDKNode-1763179222370_1766551025528'] = { success: false, error: errorMessage, chainId: 'flow_openaiAgentSDKNode-1763179222370_1766551025528', results: {}, errors: [errorMessage] };
      }
    }
  }

  // Execute flow_openaiAgentSDKNode-1763190181978_1766551025529
  if (!specificChainId || specificChainId === 'flow_openaiAgentSDKNode-1763190181978_1766551025529') {
    
    // ✅ CRITICAL FIX: Button/Form workflows should NOT auto-execute on page load
    // They should only execute when explicitly triggered (button click, form submit, etc.)
    const isButtonOrFormChain = ['button', 'form'].includes('openaiAgentSDKNode');
    const isPageLoadTrigger = triggerData && triggerData.trigger === 'page-load';
    
    if (isButtonOrFormChain && isPageLoadTrigger && !specificChainId) {
      console.log('⏭️ Skipping button/form workflow flow_openaiAgentSDKNode-1763190181978_1766551025529 - should not auto-execute on page load (trigger: openaiAgentSDKNode)');
      results['flow_openaiAgentSDKNode-1763190181978_1766551025529'] = { 
        success: false, 
        skipped: true, 
        reason: 'Button/Form workflow should not run on page load',
        chainId: 'flow_openaiAgentSDKNode-1763190181978_1766551025529',
        triggerType: 'openaiAgentSDKNode',
        actualTrigger: triggerData.trigger
      };
      // Don't return here, just skip to next workflow
    } else {
      // Proceed with workflow execution
      try {
        console.log('🔗 Executing flow chain: flow_openaiAgentSDKNode-1763190181978_1766551025529');
        const result_flow_openaiAgentSDKNode_1763190181978_1766551025529 = await executeFlowChain_flow_openaiAgentSDKNode_1763190181978_1766551025529(triggerData);
        results['flow_openaiAgentSDKNode-1763190181978_1766551025529'] = result_flow_openaiAgentSDKNode_1763190181978_1766551025529;
        
        if (result_flow_openaiAgentSDKNode_1763190181978_1766551025529.success) {
          console.log('✅ Chain flow_openaiAgentSDKNode-1763190181978_1766551025529 completed successfully');
        } else {
          console.error('❌ Chain flow_openaiAgentSDKNode-1763190181978_1766551025529 failed:', result_flow_openaiAgentSDKNode_1763190181978_1766551025529.errors);
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error) || 'Unknown error';
        console.error('💥 Error executing flow flow_openaiAgentSDKNode-1763190181978_1766551025529:', error);
        results['flow_openaiAgentSDKNode-1763190181978_1766551025529'] = { success: false, error: errorMessage, chainId: 'flow_openaiAgentSDKNode-1763190181978_1766551025529', results: {}, errors: [errorMessage] };
      }
    }
  }
  
  const endTime = Date.now();
  const executionTime = endTime - startTime;
  
  console.log('🏁 Flow execution completed in ' + executionTime + 'ms');
  
  return {
    success: true,
    results,
    errors: [],
    chainId: 'master',
    executionTime,
    totalChains: 4,
    successfulChains: Object.values(results).filter((r: any) => r.success).length
  };
};

const getFlowChainInfo = (): any[] => {
  return [
  {
    "id": "flow_inbound-email-1763097045884_1766551025527",
    "nodeTypes": [
      "inbound-email",
      "openaiAgentSDKNode"
    ],
    "nodeCount": 2,
    "chainType": "linear",
    "startNode": {
      "id": "inbound-email-1763097045884",
      "style": {
        "padding": "0",
        "borderColor": "#2563eb",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 483,
      "config": {
        "host": "",
        "port": 993,
        "folder": "INBOX",
        "useSSL": true,
        "password": "",
        "username": "",
        "bodyFilter": "",
        "fromFilter": "",
        "markAsRead": false,
        "emailMethod": "webhook",
        "credentialId": "013df1cf-5605-4698-ac1b-58e696b8b41c",
        "customDomain": "",
        "forwardEmail": "",
        "checkInterval": 30,
        "subjectFilter": "",
        "includeHeaders": false,
        "webhookProvider": "sendgrid",
        "extractAttachments": false,
        "integrationService": "zapier"
      },
      "metadata": {
        "name": "inbound-email Node",
        "label": "Inbound Email",
        "description": ""
      },
      "nodeType": "inbound-email",
      "position": {
        "x": 148.82537247637293,
        "y": -182.56462486550328
      }
    },
    "endNode": {
      "id": "openaiAgentSDKNode-1763118348594",
      "style": {
        "padding": "0",
        "borderColor": "#3b82f6",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 583,
      "config": {
        "type": "openaiAgentSDKNode",
        "label": "Main Agent",
        "model": "gpt-4",
        "tools": [],
        "userId": "",
        "agentId": "",
        "nodeType": "openaiAgentSDK",
        "noteText": "",
        "sessionId": "",
        "isAgentSDK": true,
        "max_tokens": 1000,
        "memoryType": "simple",
        "description": "OpenAI Agent SDK application",
        "mcp_servers": [],
        "querySource": "",
        "temperature": 0.7,
        "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
        "agentSDKType": "orchestrator",
        "credentialId": "***REDACTED***",
        "enableMemory": false,
        "handoff_mode": "tool_call",
        "instructions": "You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n",
        "tool_configs": {},
        "queryVariable": "",
        "tool_settings": {
          "tool_timeout_ms": 30000,
          "error_handling_mode": "graceful",
          "enable_parallel_execution": false,
          "max_tool_calls_per_request": 5
        },
        "variableInput": "",
        "resultVariable": "sdkResult",
        "selected_tools": [],
        "handoff_enabled": true,
        "handoff_targets": [
          {
            "agent_label": "Promotion",
            "agent_node_id": "openaiAgentSDKNode-1763097052561",
            "agent_description": "OpenAI Agent SDK application",
            "handoff_instructions": "Transfer to Promotion for specialized assistance"
          },
          {
            "agent_label": "Personal",
            "agent_node_id": "openaiAgentSDKNode-1763179222370",
            "agent_description": "OpenAI Agent SDK application",
            "handoff_instructions": "Transfer to Personal for specialized assistance"
          },
          {
            "agent_label": "Important",
            "agent_node_id": "openaiAgentSDKNode-1763190181978",
            "agent_description": "OpenAI Agent SDK application",
            "handoff_instructions": "Transfer to Important for specialized assistance"
          }
        ],
        "memoryTableName": "",
        "selectedDataSources": [],
        "auto_handoff_enabled": false,
        "isAgentSDKOrchestrator": false
      },
      "metadata": {
        "name": "openaiAgentSDKNode Node",
        "label": "Main Agent",
        "description": "OpenAI Agent SDK application"
      },
      "nodeType": "openaiAgentSDKNode",
      "position": {
        "x": 815.3358474237264,
        "y": -207.74874349492552
      }
    },
    "nodes": [
      {
        "id": "inbound-email-1763097045884",
        "style": {
          "padding": "0",
          "borderColor": "#2563eb",
          "borderWidth": "2px",
          "borderRadius": "8px"
        },
        "width": 483,
        "config": {
          "host": "",
          "port": 993,
          "folder": "INBOX",
          "useSSL": true,
          "password": "",
          "username": "",
          "bodyFilter": "",
          "fromFilter": "",
          "markAsRead": false,
          "emailMethod": "webhook",
          "credentialId": "013df1cf-5605-4698-ac1b-58e696b8b41c",
          "customDomain": "",
          "forwardEmail": "",
          "checkInterval": 30,
          "subjectFilter": "",
          "includeHeaders": false,
          "webhookProvider": "sendgrid",
          "extractAttachments": false,
          "integrationService": "zapier"
        },
        "metadata": {
          "name": "inbound-email Node",
          "label": "Inbound Email",
          "description": ""
        },
        "nodeType": "inbound-email",
        "position": {
          "x": 148.82537247637293,
          "y": -182.56462486550328
        }
      },
      {
        "id": "openaiAgentSDKNode-1763118348594",
        "style": {
          "padding": "0",
          "borderColor": "#3b82f6",
          "borderWidth": "2px",
          "borderRadius": "8px"
        },
        "width": 583,
        "config": {
          "type": "openaiAgentSDKNode",
          "label": "Main Agent",
          "model": "gpt-4",
          "tools": [],
          "userId": "",
          "agentId": "",
          "nodeType": "openaiAgentSDK",
          "noteText": "",
          "sessionId": "",
          "isAgentSDK": true,
          "max_tokens": 1000,
          "memoryType": "simple",
          "description": "OpenAI Agent SDK application",
          "mcp_servers": [],
          "querySource": "",
          "temperature": 0.7,
          "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
          "agentSDKType": "orchestrator",
          "credentialId": "***REDACTED***",
          "enableMemory": false,
          "handoff_mode": "tool_call",
          "instructions": "You are the Orchestrator Agent. Your ONLY job is to analyze the incoming email content and route it to the correct specialized agent. \nYou must NOT answer or classify the email yourself.\n\nROUTING RULES:\n\n1. If the content clearly relates to **promotion emails**, such as:\n   - offers, discounts, coupons, deals, cashback,\n   - commercial or marketing messages,\n   - brand newsletters or campaign mails,\n   - ecommerce offers or product promotions,\n   Route to: Promotion Agent\n\n2. If the content clearly relates to **personal emails**, such as:\n   - informal, friendly, emotional, casual tone,\n   - friends, family, personal contacts,\n   - greetings like: how are you, let’s meet, long time, happy birthday, miss you, take care, congratulations,\n   Route to: Personal Agent\n\n3. If the content clearly relates to **important emails / work / business / office / official emails**, such as:\n   - company communication, client emails, organization notices,\n   - HR, admin, operations, team updates,\n   - formal tone, business context, office tasks,\n   Route to: Important Agent\n\nIF NONE of the above categories match:\nRespond with:\n“No specific keywords are matched. Please use appropriate keywords.”\n",
          "tool_configs": {},
          "queryVariable": "",
          "tool_settings": {
            "tool_timeout_ms": 30000,
            "error_handling_mode": "graceful",
            "enable_parallel_execution": false,
            "max_tool_calls_per_request": 5
          },
          "variableInput": "",
          "resultVariable": "sdkResult",
          "selected_tools": [],
          "handoff_enabled": true,
          "handoff_targets": [
            {
              "agent_label": "Promotion",
              "agent_node_id": "openaiAgentSDKNode-1763097052561",
              "agent_description": "OpenAI Agent SDK application",
              "handoff_instructions": "Transfer to Promotion for specialized assistance"
            },
            {
              "agent_label": "Personal",
              "agent_node_id": "openaiAgentSDKNode-1763179222370",
              "agent_description": "OpenAI Agent SDK application",
              "handoff_instructions": "Transfer to Personal for specialized assistance"
            },
            {
              "agent_label": "Important",
              "agent_node_id": "openaiAgentSDKNode-1763190181978",
              "agent_description": "OpenAI Agent SDK application",
              "handoff_instructions": "Transfer to Important for specialized assistance"
            }
          ],
          "memoryTableName": "",
          "selectedDataSources": [],
          "auto_handoff_enabled": false,
          "isAgentSDKOrchestrator": false
        },
        "metadata": {
          "name": "openaiAgentSDKNode Node",
          "label": "Main Agent",
          "description": "OpenAI Agent SDK application"
        },
        "nodeType": "openaiAgentSDKNode",
        "position": {
          "x": 815.3358474237264,
          "y": -207.74874349492552
        }
      }
    ]
  },
  {
    "id": "flow_openaiAgentSDKNode-1763097052561_1766551025528",
    "nodeTypes": [
      "openaiAgentSDKNode"
    ],
    "nodeCount": 1,
    "chainType": "linear",
    "startNode": {
      "id": "openaiAgentSDKNode-1763097052561",
      "style": {
        "padding": "0",
        "borderColor": "#3b82f6",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 583,
      "config": {
        "type": "openaiAgentSDKNode",
        "label": "Promotion Agent",
        "model": "gpt-4",
        "tools": [],
        "userId": "",
        "agentId": "",
        "nodeType": "openaiAgentSDK",
        "noteText": "",
        "sessionId": "",
        "isAgentSDK": true,
        "max_tokens": 1000,
        "memoryType": "simple",
        "description": "OpenAI Agent SDK application",
        "mcp_servers": [
          {
            "id": "custom_mcp_1766550564991",
            "url": "https://telegram-send.mcp.simplita.app/mcp",
            "name": "telegramsend",
            "enabled": true,
            "description": "Custom MCP Server"
          }
        ],
        "querySource": "",
        "temperature": 0.7,
        "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
        "agentSDKType": "agent_as_tool",
        "credentialId": "***REDACTED***",
        "enableMemory": false,
        "handoff_mode": "transfer_control",
        "instructions": "You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n",
        "tool_configs": {},
        "queryVariable": "",
        "tool_settings": {
          "tool_timeout_ms": 30000,
          "error_handling_mode": "graceful",
          "enable_parallel_execution": false,
          "max_tool_calls_per_request": 5
        },
        "variableInput": "",
        "resultVariable": "sdkResult",
        "selected_tools": [],
        "handoff_enabled": false,
        "handoff_targets": [],
        "memoryTableName": "",
        "selectedDataSources": [],
        "auto_handoff_enabled": false,
        "isAgentSDKOrchestrator": false
      },
      "metadata": {
        "name": "openaiAgentSDKNode Node",
        "label": "Promotion Agent",
        "description": "OpenAI Agent SDK application"
      },
      "nodeType": "openaiAgentSDKNode",
      "position": {
        "x": -8.94670903456256,
        "y": 605.4826981483436
      }
    },
    "endNode": {
      "id": "openaiAgentSDKNode-1763097052561",
      "style": {
        "padding": "0",
        "borderColor": "#3b82f6",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 583,
      "config": {
        "type": "openaiAgentSDKNode",
        "label": "Promotion Agent",
        "model": "gpt-4",
        "tools": [],
        "userId": "",
        "agentId": "",
        "nodeType": "openaiAgentSDK",
        "noteText": "",
        "sessionId": "",
        "isAgentSDK": true,
        "max_tokens": 1000,
        "memoryType": "simple",
        "description": "OpenAI Agent SDK application",
        "mcp_servers": [
          {
            "id": "custom_mcp_1766550564991",
            "url": "https://telegram-send.mcp.simplita.app/mcp",
            "name": "telegramsend",
            "enabled": true,
            "description": "Custom MCP Server"
          }
        ],
        "querySource": "",
        "temperature": 0.7,
        "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
        "agentSDKType": "agent_as_tool",
        "credentialId": "***REDACTED***",
        "enableMemory": false,
        "handoff_mode": "transfer_control",
        "instructions": "You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n",
        "tool_configs": {},
        "queryVariable": "",
        "tool_settings": {
          "tool_timeout_ms": 30000,
          "error_handling_mode": "graceful",
          "enable_parallel_execution": false,
          "max_tool_calls_per_request": 5
        },
        "variableInput": "",
        "resultVariable": "sdkResult",
        "selected_tools": [],
        "handoff_enabled": false,
        "handoff_targets": [],
        "memoryTableName": "",
        "selectedDataSources": [],
        "auto_handoff_enabled": false,
        "isAgentSDKOrchestrator": false
      },
      "metadata": {
        "name": "openaiAgentSDKNode Node",
        "label": "Promotion Agent",
        "description": "OpenAI Agent SDK application"
      },
      "nodeType": "openaiAgentSDKNode",
      "position": {
        "x": -8.94670903456256,
        "y": 605.4826981483436
      }
    },
    "nodes": [
      {
        "id": "openaiAgentSDKNode-1763097052561",
        "style": {
          "padding": "0",
          "borderColor": "#3b82f6",
          "borderWidth": "2px",
          "borderRadius": "8px"
        },
        "width": 583,
        "config": {
          "type": "openaiAgentSDKNode",
          "label": "Promotion Agent",
          "model": "gpt-4",
          "tools": [],
          "userId": "",
          "agentId": "",
          "nodeType": "openaiAgentSDK",
          "noteText": "",
          "sessionId": "",
          "isAgentSDK": true,
          "max_tokens": 1000,
          "memoryType": "simple",
          "description": "OpenAI Agent SDK application",
          "mcp_servers": [
            {
              "id": "custom_mcp_1766550564991",
              "url": "https://telegram-send.mcp.simplita.app/mcp",
              "name": "telegramsend",
              "enabled": true,
              "description": "Custom MCP Server"
            }
          ],
          "querySource": "",
          "temperature": 0.7,
          "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
          "agentSDKType": "agent_as_tool",
          "credentialId": "***REDACTED***",
          "enableMemory": false,
          "handoff_mode": "transfer_control",
          "instructions": "You are an email classifier.\n\nYour ONLY task is to extract Promotion Emails.\n\nA Promotion Email must clearly contain:\n- A sale, discount, coupon, offer, promo code, cashback, deal, special price, limited-time offer, new launch, subscription promo, or event promotion.\n- Commercial/marketing language like buy now, shop now, subscribe, offer ends soon.\n- Sender looks like a business, brand, ecommerce, newsletter, or no-reply address.\n\nDO NOT classify as promotions:\n- Job platform emails (job alert, interview, application).\n- Birthday or personal greetings of any kind.\n- Business, office, or official notices.\n- Bank, invoice, OTP, password reset, or verification emails.\n- Any personal message from friends/family.\n- Any informational email without a commercial offer.\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf it IS a promotion, output EXACTLY this:\nFrom: [sender name only, remove the email address, do not use any special characters]\nSubject: {{subject}}\nMessage Summary: [One-line summary of the promotional offer]\n\nThis output MUST be sent using the MCP Server tool telegram send.\n\nIf it is NOT a promotion, return NOTHING.\n\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Telegram Send.\nIf the email is NOT personal, output NOTHING.\n",
          "tool_configs": {},
          "queryVariable": "",
          "tool_settings": {
            "tool_timeout_ms": 30000,
            "error_handling_mode": "graceful",
            "enable_parallel_execution": false,
            "max_tool_calls_per_request": 5
          },
          "variableInput": "",
          "resultVariable": "sdkResult",
          "selected_tools": [],
          "handoff_enabled": false,
          "handoff_targets": [],
          "memoryTableName": "",
          "selectedDataSources": [],
          "auto_handoff_enabled": false,
          "isAgentSDKOrchestrator": false
        },
        "metadata": {
          "name": "openaiAgentSDKNode Node",
          "label": "Promotion Agent",
          "description": "OpenAI Agent SDK application"
        },
        "nodeType": "openaiAgentSDKNode",
        "position": {
          "x": -8.94670903456256,
          "y": 605.4826981483436
        }
      }
    ]
  },
  {
    "id": "flow_openaiAgentSDKNode-1763179222370_1766551025528",
    "nodeTypes": [
      "openaiAgentSDKNode"
    ],
    "nodeCount": 1,
    "chainType": "linear",
    "startNode": {
      "id": "openaiAgentSDKNode-1763179222370",
      "style": {
        "padding": "0",
        "borderColor": "#3b82f6",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 583,
      "config": {
        "type": "openaiAgentSDKNode",
        "label": "Personal Agent",
        "model": "gpt-4.1-2025-04-14",
        "tools": [],
        "userId": "",
        "agentId": "",
        "nodeType": "openaiAgentSDK",
        "noteText": "",
        "sessionId": "",
        "isAgentSDK": true,
        "max_tokens": 1000,
        "memoryType": "simple",
        "description": "OpenAI Agent SDK application",
        "mcp_servers": [
          {
            "id": "custom_mcp_1766550587118",
            "url": "https://twilio-whatsapp-send.mcp.simplita.app/mcp",
            "name": "twiliosend",
            "enabled": true,
            "description": "Custom MCP Server"
          }
        ],
        "querySource": "",
        "temperature": 0.7,
        "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
        "agentSDKType": "agent_as_tool",
        "credentialId": "***REDACTED***",
        "enableMemory": false,
        "handoff_mode": "transfer_control",
        "instructions": "You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n",
        "tool_configs": {},
        "queryVariable": "",
        "tool_settings": {
          "tool_timeout_ms": 30000,
          "error_handling_mode": "graceful",
          "enable_parallel_execution": false,
          "max_tool_calls_per_request": 5
        },
        "variableInput": "",
        "resultVariable": "sdkResult",
        "selected_tools": [],
        "handoff_enabled": false,
        "handoff_targets": [],
        "memoryTableName": "",
        "selectedDataSources": [],
        "auto_handoff_enabled": false,
        "isAgentSDKOrchestrator": false
      },
      "metadata": {
        "name": "openaiAgentSDKNode Node",
        "label": "Personal Agent",
        "description": "OpenAI Agent SDK application"
      },
      "nodeType": "openaiAgentSDKNode",
      "position": {
        "x": 655.1931987981156,
        "y": 954.6679068595971
      }
    },
    "endNode": {
      "id": "openaiAgentSDKNode-1763179222370",
      "style": {
        "padding": "0",
        "borderColor": "#3b82f6",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 583,
      "config": {
        "type": "openaiAgentSDKNode",
        "label": "Personal Agent",
        "model": "gpt-4.1-2025-04-14",
        "tools": [],
        "userId": "",
        "agentId": "",
        "nodeType": "openaiAgentSDK",
        "noteText": "",
        "sessionId": "",
        "isAgentSDK": true,
        "max_tokens": 1000,
        "memoryType": "simple",
        "description": "OpenAI Agent SDK application",
        "mcp_servers": [
          {
            "id": "custom_mcp_1766550587118",
            "url": "https://twilio-whatsapp-send.mcp.simplita.app/mcp",
            "name": "twiliosend",
            "enabled": true,
            "description": "Custom MCP Server"
          }
        ],
        "querySource": "",
        "temperature": 0.7,
        "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
        "agentSDKType": "agent_as_tool",
        "credentialId": "***REDACTED***",
        "enableMemory": false,
        "handoff_mode": "transfer_control",
        "instructions": "You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n",
        "tool_configs": {},
        "queryVariable": "",
        "tool_settings": {
          "tool_timeout_ms": 30000,
          "error_handling_mode": "graceful",
          "enable_parallel_execution": false,
          "max_tool_calls_per_request": 5
        },
        "variableInput": "",
        "resultVariable": "sdkResult",
        "selected_tools": [],
        "handoff_enabled": false,
        "handoff_targets": [],
        "memoryTableName": "",
        "selectedDataSources": [],
        "auto_handoff_enabled": false,
        "isAgentSDKOrchestrator": false
      },
      "metadata": {
        "name": "openaiAgentSDKNode Node",
        "label": "Personal Agent",
        "description": "OpenAI Agent SDK application"
      },
      "nodeType": "openaiAgentSDKNode",
      "position": {
        "x": 655.1931987981156,
        "y": 954.6679068595971
      }
    },
    "nodes": [
      {
        "id": "openaiAgentSDKNode-1763179222370",
        "style": {
          "padding": "0",
          "borderColor": "#3b82f6",
          "borderWidth": "2px",
          "borderRadius": "8px"
        },
        "width": 583,
        "config": {
          "type": "openaiAgentSDKNode",
          "label": "Personal Agent",
          "model": "gpt-4.1-2025-04-14",
          "tools": [],
          "userId": "",
          "agentId": "",
          "nodeType": "openaiAgentSDK",
          "noteText": "",
          "sessionId": "",
          "isAgentSDK": true,
          "max_tokens": 1000,
          "memoryType": "simple",
          "description": "OpenAI Agent SDK application",
          "mcp_servers": [
            {
              "id": "custom_mcp_1766550587118",
              "url": "https://twilio-whatsapp-send.mcp.simplita.app/mcp",
              "name": "twiliosend",
              "enabled": true,
              "description": "Custom MCP Server"
            }
          ],
          "querySource": "",
          "temperature": 0.7,
          "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
          "agentSDKType": "agent_as_tool",
          "credentialId": "***REDACTED***",
          "enableMemory": false,
          "handoff_mode": "transfer_control",
          "instructions": "You are an email classifier. Your ONLY task is to identify Personal Emails.\nA Personal Email must clearly meet ALL of the following conditions:\nWritten in an informal, friendly, emotional, or casual tone.\nThe sender appears to be a friend, family member, or personal contact.\nContains personal greetings or emotional expressions such as: how are you, let's meet, long time, happy birthday, miss you, take care, get well soon, congratulations, checking on you, call me, family update.\nIncludes personal updates, wishes, invitations, or casual conversations.\nDO NOT classify as personal:\nJob platform emails\nBusiness or office-related emails\nCompany announcements or newsletters\nPromotional or marketing emails\nBank, OTP, invoice, password reset, verification emails\nSystem notifications or automated messages\nAnything promoting a product, service, event, or subscription\nEmails with a formal or professional tone\nINPUT FORMAT:\n From: {{from}}\n Subject: {{subject}}\n Body: {{text}}\n Phone: +916383106386\nOUTPUT RULES:\n If the email IS personal, output EXACTLY the following three lines (nothing more, nothing less):\nFrom: [sender name only, no email address]\n Subject: {{subject}}\n Message Summary: [one short friendly summary]\nThis output MUST be sent using the MCP Server tool twilio-send, using the phone number provided in the input.\nSTRICT FORMAT RULES:\nOutput ONLY these three lines.\nNo additional text, no markdown.\nDo not include email addresses.\nDo not include angle brackets.\nNo special characters.\nNo blank lines before or after the output.\nPlain text only, compatible with MCP Twilio Send.\nIf the email is NOT personal, output NOTHING.\n",
          "tool_configs": {},
          "queryVariable": "",
          "tool_settings": {
            "tool_timeout_ms": 30000,
            "error_handling_mode": "graceful",
            "enable_parallel_execution": false,
            "max_tool_calls_per_request": 5
          },
          "variableInput": "",
          "resultVariable": "sdkResult",
          "selected_tools": [],
          "handoff_enabled": false,
          "handoff_targets": [],
          "memoryTableName": "",
          "selectedDataSources": [],
          "auto_handoff_enabled": false,
          "isAgentSDKOrchestrator": false
        },
        "metadata": {
          "name": "openaiAgentSDKNode Node",
          "label": "Personal Agent",
          "description": "OpenAI Agent SDK application"
        },
        "nodeType": "openaiAgentSDKNode",
        "position": {
          "x": 655.1931987981156,
          "y": 954.6679068595971
        }
      }
    ]
  },
  {
    "id": "flow_openaiAgentSDKNode-1763190181978_1766551025529",
    "nodeTypes": [
      "openaiAgentSDKNode"
    ],
    "nodeCount": 1,
    "chainType": "linear",
    "startNode": {
      "id": "openaiAgentSDKNode-1763190181978",
      "style": {
        "padding": "0",
        "borderColor": "#3b82f6",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 583,
      "config": {
        "type": "openaiAgentSDKNode",
        "label": "Important Agent",
        "model": "gpt-4",
        "tools": [],
        "userId": "",
        "agentId": "",
        "nodeType": "openaiAgentSDK",
        "noteText": "",
        "sessionId": "",
        "isAgentSDK": true,
        "max_tokens": 1000,
        "memoryType": "simple",
        "description": "OpenAI Agent SDK application",
        "mcp_servers": [
          {
            "id": "custom_mcp_1766550611687",
            "url": "https://send-slack.mcp.simplita.app/mcp",
            "name": "slacksend",
            "enabled": true,
            "description": "Custom MCP Server"
          }
        ],
        "querySource": "",
        "temperature": 0.7,
        "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
        "agentSDKType": "agent_as_tool",
        "credentialId": "***REDACTED***",
        "enableMemory": false,
        "handoff_mode": "transfer_control",
        "instructions": "You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING",
        "tool_configs": {},
        "queryVariable": "",
        "tool_settings": {
          "tool_timeout_ms": 30000,
          "error_handling_mode": "graceful",
          "enable_parallel_execution": false,
          "max_tool_calls_per_request": 5
        },
        "variableInput": "",
        "resultVariable": "sdkResult",
        "selected_tools": [],
        "handoff_enabled": false,
        "handoff_targets": [],
        "memoryTableName": "",
        "selectedDataSources": [],
        "auto_handoff_enabled": false,
        "isAgentSDKOrchestrator": false
      },
      "metadata": {
        "name": "openaiAgentSDKNode Node",
        "label": "Important Agent",
        "description": "OpenAI Agent SDK application"
      },
      "nodeType": "openaiAgentSDKNode",
      "position": {
        "x": 1412.9253343510209,
        "y": 864.9902289350088
      }
    },
    "endNode": {
      "id": "openaiAgentSDKNode-1763190181978",
      "style": {
        "padding": "0",
        "borderColor": "#3b82f6",
        "borderWidth": "2px",
        "borderRadius": "8px"
      },
      "width": 583,
      "config": {
        "type": "openaiAgentSDKNode",
        "label": "Important Agent",
        "model": "gpt-4",
        "tools": [],
        "userId": "",
        "agentId": "",
        "nodeType": "openaiAgentSDK",
        "noteText": "",
        "sessionId": "",
        "isAgentSDK": true,
        "max_tokens": 1000,
        "memoryType": "simple",
        "description": "OpenAI Agent SDK application",
        "mcp_servers": [
          {
            "id": "custom_mcp_1766550611687",
            "url": "https://send-slack.mcp.simplita.app/mcp",
            "name": "slacksend",
            "enabled": true,
            "description": "Custom MCP Server"
          }
        ],
        "querySource": "",
        "temperature": 0.7,
        "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
        "agentSDKType": "agent_as_tool",
        "credentialId": "***REDACTED***",
        "enableMemory": false,
        "handoff_mode": "transfer_control",
        "instructions": "You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING",
        "tool_configs": {},
        "queryVariable": "",
        "tool_settings": {
          "tool_timeout_ms": 30000,
          "error_handling_mode": "graceful",
          "enable_parallel_execution": false,
          "max_tool_calls_per_request": 5
        },
        "variableInput": "",
        "resultVariable": "sdkResult",
        "selected_tools": [],
        "handoff_enabled": false,
        "handoff_targets": [],
        "memoryTableName": "",
        "selectedDataSources": [],
        "auto_handoff_enabled": false,
        "isAgentSDKOrchestrator": false
      },
      "metadata": {
        "name": "openaiAgentSDKNode Node",
        "label": "Important Agent",
        "description": "OpenAI Agent SDK application"
      },
      "nodeType": "openaiAgentSDKNode",
      "position": {
        "x": 1412.9253343510209,
        "y": 864.9902289350088
      }
    },
    "nodes": [
      {
        "id": "openaiAgentSDKNode-1763190181978",
        "style": {
          "padding": "0",
          "borderColor": "#3b82f6",
          "borderWidth": "2px",
          "borderRadius": "8px"
        },
        "width": 583,
        "config": {
          "type": "openaiAgentSDKNode",
          "label": "Important Agent",
          "model": "gpt-4",
          "tools": [],
          "userId": "",
          "agentId": "",
          "nodeType": "openaiAgentSDK",
          "noteText": "",
          "sessionId": "",
          "isAgentSDK": true,
          "max_tokens": 1000,
          "memoryType": "simple",
          "description": "OpenAI Agent SDK application",
          "mcp_servers": [
            {
              "id": "custom_mcp_1766550611687",
              "url": "https://send-slack.mcp.simplita.app/mcp",
              "name": "slacksend",
              "enabled": true,
              "description": "Custom MCP Server"
            }
          ],
          "querySource": "",
          "temperature": 0.7,
          "user_prompt": "{{from}}\n{{subject}}\n{{text}}",
          "agentSDKType": "agent_as_tool",
          "credentialId": "***REDACTED***",
          "enableMemory": false,
          "handoff_mode": "transfer_control",
          "instructions": "You are an email classifier.\n\nYour ONLY task is to extract Important Emails.\n\nAn Important Email must clearly belong to one of these categories:\n- Work-related communication\n- Business or client communication\n- Official updates from a company or organization\n- Internal office communication or team updates\n- Meeting requests, follow-ups, or task-related instructions\n- Notifications requiring action (review, approval, submission, reminder)\n- Professional conversations with a formal or semi-formal tone\n\nImportant Emails often contain:\naction required, update, reminder, meeting, schedule, follow-up,\nplease review, approval needed, document attached, deadline, report,\nteam, project, assignment, policy update, company notice.\n\nDO NOT classify as important:\n- Job platform emails (job alerts, applications, interviews)\n- Promotional or marketing emails (sales, offers, discounts)\n- Birthday or personal greetings\n- Messages from friends or family\n- Bank, OTP, password reset, or verification emails\n- System-generated notifications unrelated to work\n- Newsletters or marketing announcements\n- Any email that does not have work, business, or official purpose\n\nINPUT:\nFrom: {{from}}\nSubject: {{subject}}\nBody: {{text}}\n\nOUTPUT:\nIf the email IS important, output EXACTLY the following:\nFrom: [sender name only, remove the email address, no special characters]\nSubject: {{subject}}\nMessage Summary: [one-line summary of the work or official message]\nThis output MUST be sent using the MCP Server tool slack send. \n\nIf the email is NOT important, return NOTHING.\nNo extra text, no labels, no spaces.\n\nIMPORTANT:\n- Do NOT output any special characters or angle brackets.\n- Output must be clean plain text only.\nPlain text only, compatible with MCP Slack Send.\nIf the email is NOT personal, output NOTHING",
          "tool_configs": {},
          "queryVariable": "",
          "tool_settings": {
            "tool_timeout_ms": 30000,
            "error_handling_mode": "graceful",
            "enable_parallel_execution": false,
            "max_tool_calls_per_request": 5
          },
          "variableInput": "",
          "resultVariable": "sdkResult",
          "selected_tools": [],
          "handoff_enabled": false,
          "handoff_targets": [],
          "memoryTableName": "",
          "selectedDataSources": [],
          "auto_handoff_enabled": false,
          "isAgentSDKOrchestrator": false
        },
        "metadata": {
          "name": "openaiAgentSDKNode Node",
          "label": "Important Agent",
          "description": "OpenAI Agent SDK application"
        },
        "nodeType": "openaiAgentSDKNode",
        "position": {
          "x": 1412.9253343510209,
          "y": 864.9902289350088
        }
      }
    ]
  }
];
};

const executeSpecificFlow = async (chainId: string, data: any = {}): Promise<any> => {
  // Check if this is a page-load trigger
  const isPageLoadTrigger = data && (data.trigger === 'page-load' || data.trigger === 'page-load-retry');
  
  if (isPageLoadTrigger) {
    // Get chain info
    const allChains = getFlowChainInfo();
    const chain = allChains.find(c => c.id === chainId);
    
    // Check if this is a page-load chain
    if (chain && chain.startNode && chain.startNode.nodeType === 'page-load') {
      // Get the current page path
      const currentPath = data.pageId || (typeof window !== 'undefined' ? window.location.pathname : '/');
      
      // Get the configured page URL
      const pageUrl = chain.startNode.config && chain.startNode.config.pageUrl;
      
      if (pageUrl) {
        // Normalize paths for comparison
        const normalizedConfigUrl = pageUrl.replace(/\/$/, '');
        const normalizedCurrentPath = currentPath.replace(/\/$/, '');
        
        // Skip if paths don't match
        if (normalizedConfigUrl !== normalizedCurrentPath) {
          console.log('⏭️ Skipping chain ' + chainId + ' - configured for "' + pageUrl + '" but current path is ' + currentPath);
          return { 
            success: false, 
            skipped: true, 
            reason: 'Page URL mismatch', 
            chainId,
            configuredUrl: pageUrl,
            currentPath
          };
        }
        console.log('✅ Page URL match for chain ' + chainId + ': ' + pageUrl);
      }
    }
  }
  
  return await executeAllFlows(data, chainId);
};

// Export functions for global access
if (typeof window !== 'undefined') {
  (window as any).executeAllFlows = executeAllFlows;
  (window as any).executeSpecificFlow = executeSpecificFlow;
  (window as any).getFlowChainInfo = getFlowChainInfo;
  
  
  console.log('🌐 Flow functions attached to window object');
  console.log('📝 Retell AI transcript monitoring not available (no Retell AI nodes in workflow)');
  
  // ===== BUTTON CHAIN REGISTRY INITIALIZATION =====
  // Initialize button chain registry for dynamic chain ID lookup
  if (!(window as any).buttonChainRegistry) {
    (window as any).buttonChainRegistry = {};
  }
  
  // Register all button-triggered chains at generation time
  const allChains = getFlowChainInfo();
  const buttonChains = allChains.filter(chain => 
    chain.startNode && chain.startNode.nodeType === 'button'
  );
  
  console.log('🔘 Registering button chains:', buttonChains.length);
  
  buttonChains.forEach(chain => {
    const buttonNode = chain.startNode;
    const config = buttonNode.config || {};
    const buttonId = config.buttonId || config.componentId || buttonNode.id;
    
    // Register both the node ID and potential element IDs
    // Node ID pattern: button-1761322615789
    // Chain ID pattern: flow_button-1761322615789_1761324366485
    
    // Method 1: Direct node ID mapping
    (window as any).buttonChainRegistry[buttonNode.id] = chain.id;
    // console.log(`🔗 Registered button node: ${buttonNode.id} → ${chain.id}`);
    
    // Method 2: If config has buttonId, register that too
    if (buttonId && buttonId !== buttonNode.id) {
      (window as any).buttonChainRegistry[buttonId] = chain.id;
      // console.log(`🔗 Registered button ID: ${buttonId} → ${chain.id}`);
    }
    
    // Method 3: Register by node ID timestamp for element ID matching
    // Extract timestamp from button node ID: button-1761322615789 -> 1761322615789
    const nodeIdMatch = buttonNode.id.match(/(\d{10,})/);
    if (nodeIdMatch) {
      const timestamp = nodeIdMatch[1];
      // Store a lookup table for timestamp-based matching
      if (!(window as any).buttonTimestampRegistry) {
        (window as any).buttonTimestampRegistry = {};
      }
      (window as any).buttonTimestampRegistry[timestamp] = {
        nodeId: buttonNode.id,
        chainId: chain.id,
        buttonId: buttonId
      };
      console.log(`🕐 Registered button timestamp: ${timestamp} → ${chain.id}`);
    }
  });
  
  // console.log('✅ Button chain registry initialized:', (window as any).buttonChainRegistry);
}

// Export functions for ES module imports
export { executeAllFlows, executeSpecificFlow, getFlowChainInfo };

// WhatsApp webhook polling function
function startWhatsAppWebhookPolling(flowId: string, nodeId: string) {
  if (!nodeId) {
    console.warn(`⚠️ No nodeId provided for WhatsApp polling`);
    return;
  }
  
  console.log(`📱 Starting WhatsApp webhook polling for node ${nodeId}`);
  
  // Poll every 2 seconds for new webhook data
  const pollInterval = setInterval(async () => {
    try {
      const response = await fetch(`/api/webhook-trigger?nodeId=${nodeId}`);
      const result = await response.json();
      
      if (result.success && result.hasData) {
        console.log(`📱 🔥 New WhatsApp webhook data found for node ${nodeId}!`);
        console.log(`📊 Data keys:`, Object.keys(result.data));
        
        // Clear the polling interval since we found data
        clearInterval(pollInterval);
        
        // Execute the flow with the webhook data
        console.log(`🚀 Executing WhatsApp flow ${flowId} with webhook data`);
        await executeSpecificFlow(flowId, result.data);
        
        console.log(`✅ WhatsApp flow ${flowId} execution completed`);
        
        // Restart polling for future webhook data (optional)
        setTimeout(() => {
          startWhatsAppWebhookPolling(flowId, nodeId);
        }, 1000);
        
      } else {
        // No new data, continue polling silently
      }
    } catch (error) {
      console.error(`❌ WhatsApp webhook polling error for node ${nodeId}:`, error);
    }
  }, 2000); // Poll every 2 seconds
  
  // Store the interval ID so it can be cleared if needed
  if (typeof window !== 'undefined') {
    window.whatsappPollingIntervals = window.whatsappPollingIntervals || {};
    window.whatsappPollingIntervals[nodeId] = pollInterval;
  }
}

function startIncomingWebhookPolling(flowId: string, nodeId?: string, webhookId?: string) {
  if (!nodeId) {
    console.warn('⚠️ No nodeId provided for incoming webhook polling');
    return;
  }

  const resolvedWebhookId = webhookId || nodeId;
  console.log('🌐 Starting incoming webhook polling for node ' + nodeId);

  const pollInterval = setInterval(async () => {
    try {
      const response = await fetch("/api/webhook-trigger?nodeId=" + nodeId);
      const result = await response.json();

      if (result.success && result.hasData) {
        console.log('🌐 🔥 Incoming webhook data detected for node ' + nodeId);

        clearInterval(pollInterval);

        if (typeof window !== 'undefined') {
          const globalScope = window as typeof window & { incomingWebhookData?: Record<string, any> };
          globalScope.incomingWebhookData = globalScope.incomingWebhookData || {};

          const payload = result.data || {};
          const dynamicBody =
            (payload && payload.body) ? payload.body :
            (payload && payload.resultVariable && payload[payload.resultVariable]) ? payload[payload.resultVariable] :
            (payload && payload.incomingData) ? payload.incomingData :
            (payload && payload.webhookPayload) ? payload.webhookPayload :
            payload;
          const normalizedPayload = {
            body: dynamicBody,
            headers: payload.headers || payload.webhookHeaders || {},
            method: payload.method || payload.webhookMethod || 'POST',
            timestamp: payload.timestamp || payload.webhookTimestamp || new Date().toISOString(),
            webhookId: resolvedWebhookId
          };

          globalScope.incomingWebhookData[resolvedWebhookId] = normalizedPayload;

          try {
            window.sessionStorage?.setItem("webhook_" + resolvedWebhookId, JSON.stringify(normalizedPayload));
          } catch (storageError) {
            console.warn('⚠️ Unable to persist incoming webhook data to sessionStorage:', storageError);
          }
        }

        const triggerPayload = Object.assign({}, result.data || {}, {
          trigger: 'incoming-webhook',
          triggerType: 'incoming_webhook',
          nodeId: nodeId,
          webhookId: resolvedWebhookId
        });

        await executeSpecificFlow(flowId, triggerPayload);

        setTimeout(() => {
          startIncomingWebhookPolling(flowId, nodeId, resolvedWebhookId);
        }, 1000);
      }
    } catch (error) {
      console.error('❌ Incoming webhook polling error for node ' + nodeId + ':', error);
    }
  }, 2000);

  if (typeof window !== 'undefined') {
    window.incomingWebhookPollingIntervals = window.incomingWebhookPollingIntervals || {};
    window.incomingWebhookPollingIntervals[nodeId] = pollInterval;
  }
}

// Telegram inbound polling function
function startTelegramInboundPolling(flowId: string, nodeId: string) {
  if (!nodeId) {
    console.warn(`⚠️ No nodeId provided for Telegram polling`);
    return;
  }
  
  console.log(`📱 Starting Telegram inbound polling for node ${nodeId}`);
  
  // Track processed message IDs per node to prevent duplicates
  const processedMessageIds = new Set<string>();
  
  // Poll every 3 seconds for new Telegram messages
  const pollInterval = setInterval(async () => {
    try {
      const response = await fetch(`/api/telegram-inbound-trigger?nodeId=${nodeId}`);
      
      if (!response.ok) {
        console.error('❌ Failed to poll Telegram messages:', response.statusText);
        return;
      }
      
      const result = await response.json();
      
      if (result.success && result.hasData) {
        // ✅ DEDUPLICATION: Check if we've already processed this message
        const messageId = result.data?.messageId || result.data?.telegram?.messageId || result.data?.message?.id;
        const deduplicationKey = messageId ? `${nodeId}_${messageId}` : null;
        
        if (deduplicationKey && processedMessageIds.has(deduplicationKey)) {
          console.log(`⚠️ Message ${messageId} already processed for node ${nodeId}, skipping duplicate`);
          return; // Skip duplicate message
        }
        
        console.log(`📱 🔥 New Telegram message detected for node ${nodeId}!`);
        console.log(`📊 Data keys:`, Object.keys(result.data || {}));
        console.log(`📝 Message ID: ${messageId || 'N/A'}`);
        
        // Mark this message as processed
        if (deduplicationKey) {
          processedMessageIds.add(deduplicationKey);
          // Clean up old processed messages (keep only last 100)
          if (processedMessageIds.size > 100) {
            const messagesArray = Array.from(processedMessageIds);
            processedMessageIds.clear();
            messagesArray.slice(-50).forEach(id => processedMessageIds.add(id));
          }
        }
        
        // Clear the polling interval since we found data
        clearInterval(pollInterval);
        
        // Execute the flow with the webhook data (client-side execution)
        console.log(`🚀 Executing Telegram flow ${flowId} with message data (client-side)`);
        await executeSpecificFlow(flowId, result.data);
        console.log(`✅ Telegram flow ${flowId} execution completed`);
        
        // Restart polling for future webhook data
        setTimeout(() => {
          startTelegramInboundPolling(flowId, nodeId);
        }, 1000);
        
      } else {
        // No new data, continue polling silently
      }
    } catch (error) {
      console.error(`❌ Telegram polling error for node ${nodeId}:`, error);
    }
  }, 3000); // Poll every 3 seconds
  
  // Store the interval ID so it can be cleared if needed
  if (typeof window !== 'undefined') {
    window.telegramPollingIntervals = window.telegramPollingIntervals || {};
    window.telegramPollingIntervals[nodeId] = pollInterval;
  }
}


// Auto-execute trigger-based flows after initialization
if (typeof window !== 'undefined') {
  // Only execute flows that start with trigger nodes automatically
  setTimeout(async () => {
    console.log('🚀 Auto-starting trigger-based flows...');
    try {
      // Check if we have any trigger-based flows to execute
      const flowChainInfo = getFlowChainInfo();
      console.log('📊 Available flow chains for auto-execution:', flowChainInfo.length);
      
      // Execute flows that start with trigger nodes
      for (const flowInfo of flowChainInfo) {
        const startNodeType = flowInfo.startNode?.nodeType;
        const startNodeWebhookType =
          flowInfo.startNode?.config?.settings?.webhookType ||
          flowInfo.startNode?.settings?.webhookType ||
          flowInfo.startNode?.data?.settings?.webhookType ||
          flowInfo.startNode?.config?.webhookType ||
          flowInfo.startNode?.data?.webhookType ||
          flowInfo.startNode?.webhookType;
        const startNodeWebhookId =
          flowInfo.startNode?.config?.settings?.webhookId ||
          flowInfo.startNode?.settings?.webhookId ||
          flowInfo.startNode?.data?.settings?.webhookId ||
          flowInfo.startNode?.config?.webhookId ||
          flowInfo.startNode?.data?.webhookId ||
          flowInfo.startNode?.webhookId ||
          flowInfo.startNode?.id;
        const isIncomingWebhookTrigger =
          startNodeType === 'incoming-webhook' ||
          (startNodeType === 'webhook' &&
            (startNodeWebhookType === 'incoming' ||
              startNodeWebhookType === 'Incoming'));

        // console.log(`🔍 Checking flow ${flowInfo.id} with start node: ${startNodeType}`);
        
        if (startNodeType === 'inbound-email' || startNodeType === 'page-load') {
          console.log(`🎯 Auto-executing trigger flow: ${flowInfo.id}`);
          // FIX: Pass the current page path so page URL matching works correctly
          const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
          // CRITICAL FIX: Use the actual trigger type instead of hardcoding 'page-load'
          // This ensures inbound-email triggers are properly identified
          const actualTrigger = startNodeType === 'inbound-email' ? 'inbound-email' : 'page-load';
          await executeSpecificFlow(flowInfo.id, { 
            trigger: actualTrigger,
            nodeType: startNodeType,
            pageId: currentPath
          });
        } else if (startNodeType === 'whatsapp-trigger') {
          console.log(`📱 WhatsApp trigger flow detected: ${flowInfo.id} - setting up webhook polling`);
          // Start polling for webhook data for this specific WhatsApp trigger
          startWhatsAppWebhookPolling(flowInfo.id, flowInfo.startNode?.id);
        } else if (startNodeType === 'telegram-inbound') {
          console.log(`📱 Telegram inbound flow detected: ${flowInfo.id} - setting up client-side polling`);
          // ✅ CRITICAL FIX: Enable client-side polling for Telegram inbound
          // Backend stores webhook data, client polls and executes workflow client-side
          // This ensures network calls are visible and variables are accessible to subsequent nodes
          startTelegramInboundPolling(flowInfo.id, flowInfo.startNode?.id);
        } else if (startNodeType === 'timer' || startNodeType === 'schedule') {
          console.log(`⏰ Timer/Schedule flow detected: ${flowInfo.id} - scheduling only (not executing)`);
          // Timer flows are scheduled automatically in their individual initialization
          // They should NOT be executed immediately on page load
        }
      }
    } catch (error) {
      console.error('❌ Error auto-executing trigger flows:', error);
    }
  }, 1000);
}

