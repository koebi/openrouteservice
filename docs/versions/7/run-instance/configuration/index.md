# Configuration

The recommended way to configure your own openrouteservice instance is with a YAML configuration file. 

In the past openrouteservice was configured [via JSON file](./json.md). This configuration method has been **deprecated** and will be eventually removed, therefore we strongly discourage you from using it.

## File location

By default, openrouteservice will look for a configuration file in the locations below in that order.
The first existing file is used as configuration.

| Path                                        | Description                                 |
|:--------------------------------------------|:--------------------------------------------|
| `./ors-config.yml`                          | Current working directory                   |
| `~/.config/openrouteservice/ors-config.yml` | User configuration directory                |
| `/etc/openrouteservice/ors-config.yml`      | Global configuration directory              |

There are two (optional) ways for you to provide openrouteservice the location of a configuration file:
1. Program argument
      ```shell 
      java -jar ors.jar /path/to/ors-config.yml
      ```
2. Environment variable `ORS_CONFIG_LOCATION`
      ```shell 
      export ORS_CONFIG_LOCATION=/path/to/ors-config.yml
      java -jar ors.jar
      ```

At program start openrouteservice reports which configuration file was loaded.

## File content

You can find an [example configuration file](https://github.com/GIScience/openrouteservice/blob/main/ors-config.yml) with most available configuration options.

At the very least, openrouteservice needs the configuration to contain an enabled [profile](./ors/engine/profiles.md) and the
reference to an [OSM data file](../data.md#osm-data) to run properly. Therefore, the minimal valid content of such a file
would be, e.g.:

```yaml
ors:
  engine:
    source_file: ./osm_file.pbf
    profiles: 
      car: 
        enabled: true
```

The properties are organized in a hierarchical structure, with the following ones at top level.

- [Spring Properties](./spring/index.md), such as 
    * [Server Properties](./spring/server.md)
    * [Logging Properties](./spring/logging.md)
- openrouteservice properties with these children:
    * [ors.endpoints](./ors/endpoints/index.md): Settings required at runtime to process API requests.
    * [ors.engine](./ors/engine/index.md): Settings required at graph-build time during startup.
    * [ors.cors](./ors/cors/index.md): Cross-origin resource sharing settings.
    * [ors.messages](./ors/messages/index.md): System messages that can be sent with API responses following simple rules.


## Alternative configuration 

All configuration parameters can be overridden by runtime parameters or by setting environment variables. At program start openrouteservice reports on every environment variable that *might* have an effect on its behavior. You can run openrouteservice entirely without a configuration file by setting all required properties via environment variables. The examples listed below achieve the same example minimal configuration mentioned above.

The options in order of precedence (higher options win over lower) are: 
- Spring runtime parameter
  ```shell 
  java -jar ors.jar --ors.engine.source_file=./osm_file.pbf --ors.engine.profiles.car.enabled=true
  ```
- Java VM runtime parameter
  ```shell 
  java -jar -Dors.engine.source_file=./osm_file.pbf -Dors.engine.profiles.car.enabled=true ors.jar 
  ```
- Environment variables
  ```shell 
  export ors.engine.source_file=./osm_file.pbf 
  export ors.engine.profiles.car.enabled=true
  java -jar ors.jar 
  ```
  
The option to configure using environment variables is especially useful in contexts where you want to run openrouteservice in containers such as with [docker](../installation/running-with-docker.md). 

Every property also corresponds to an environment variable name in *uppercase letters* and with *underscores* replacing *dots*, so e.g.
- `ORS_ENGINE_SOURCE_FILE` replaces `ors.engine.source_file`
- `ORS_ENGINE_PROFILES_CAR_ENABLED` replaces `ors.engine.profiles.car.enabled`

Consequently,the following commands are equivalent to the last example above:
```shell
  export ORS_ENGINE_SOURCE_FILE=./osm_file.pbf
  export ORS_ENGINE_PROFILES_CAR_ENABLED=true
  java -jar ors.jar
```