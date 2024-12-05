using System.Text.Json.Serialization;

namespace Remov.Backend.Models;

[JsonSerializable(typeof(SpotifyTrackRemoveInfo))]
internal partial class SpotifyTrackRemoveContext : JsonSerializerContext;

public class SpotifyTrackRemoveInfo(string uri)
{
    [JsonPropertyName("tracks")]
    public TrackInfo[] Tracks { get; } = [new(uri)];

    public class TrackInfo(string uri)
    {
        [JsonPropertyName("uri")]
        public string Uri { get; } = uri;
    }
}
