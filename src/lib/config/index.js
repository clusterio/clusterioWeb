/**
 * Configuration System
 * @author Hornwitser
 * @module lib/config
 */
import {
	InvalidField,
	InvalidValue,

	Config,
	ConfigGroup,
	PluginConfigGroup,
} from "./classes"
import {
	MasterGroup,
	SlaveGroup,
	InstanceGroup,
	FactorioGroup,
	ControlGroup,

	MasterConfig,
	SlaveConfig,
	InstanceConfig,
	ControlConfig,

	registerPluginConfigGroups,
	finalizeConfigs,
	configCommand,
	handleConfigCommand,
} from "./definitions"
export {
	InvalidField,
	InvalidValue,

	Config,
	ConfigGroup,
	PluginConfigGroup,


	MasterGroup,
	SlaveGroup,
	InstanceGroup,
	FactorioGroup,
	ControlGroup,

	MasterConfig,
	SlaveConfig,
	InstanceConfig,
	ControlConfig,

	registerPluginConfigGroups,
	finalizeConfigs,
	configCommand,
	handleConfigCommand,
	// ...require("./classes"),
	// ...require("./definitions"),
};
