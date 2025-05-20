/*
 * DO NOT EDIT.  Generated Constant from WebApi.KeyConstants.json
 * Copyright © Thales, 2023
 */

/*
 * Commonly used constant values for the EXTRADATA event
 */

/** When set to 'false' in AT10Ki Version 1.2.0.9 or greater, and CR5400i 1.1.6.2 or greater, port 80 will be disabled, and port 443 will have additional security measures applied.  Defaults to 'true'. */
export const USEHTTP = "UseHttp";

/** When set to 'true' The reader will capture metrics data. Defaults to 'false'. */
export const METRICS_ENABLE = "Metrics.enable";
export const LOCATION = "Location";

/** PSK is set as the Bearer token in Authorization header of push calls. */
export const ESF_PUSH_PSK = "ESF.push.psk";

/** Turns on pushing of capture images to a server when set to 'true'. Defaults to 'false'. */
export const ESF_PUSH_CAPTUREENABLED = "ESF.push.captureEnabled";

/** Address to use for http message calls. */
export const ESF_PUSH_ADDRESS = "ESF.push.address";

/** Username for auth mode 'user'. */
export const ESF_MQTT_USER = "ESF.mqtt.user";

/** Password for auth mode 'user'. */
export const ESF_MQTT_PASSWORD = "ESF.mqtt.password";

/** Number of seconds between sending a 'metrics' message to the message queue service. */
export const ESF_MQTT_METRICINTERVALSEC = "ESF.mqtt.metricIntervalSec";

/** Set to 'true' to enable the message queue service; else false. */
export const ESF_MQTT_ENABLE = "ESF.mqtt.enable";

/** Set to 'none' or 'user'. */
export const ESF_MQTT_AUTHMODE = "ESF.mqtt.authMode";

/** Sets the server for the message queue service */
export const ESF_MQTT_ADDRESS = "ESF.mqtt.address";
export const DESCRIPTION = "Description";

/** Used to connect to Acuant services. */
export const ACUANT_USERNAME = "Acuant.Username";

/** Used to connect to Acuant services. */
export const ACUANT_SUBSCRIPTION_ID = "Acuant.Subscription ID";

/** Used to connect to Acuant services. */
export const ACUANT_PASSWORD = "Acuant.Password";

/** Used to connect to Acuant services. */
export const ACUANT_ENDPOINT = "Acuant.Endpoint";
