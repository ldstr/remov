using System.Text.Json.Serialization;

namespace Remov.Backend.Models;

[JsonSerializable(typeof(SpotifyUserInfo[]))]
internal partial class SpotifyUserInfoContext : JsonSerializerContext;

public class SpotifyUserInfo
{
    [JsonPropertyName("token")]
    public string? Token { get; set; }

    [JsonPropertyName("playlist_ids")]
    public string[]? PlaylistIds { get; set; }
}
