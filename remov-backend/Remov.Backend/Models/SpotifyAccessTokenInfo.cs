using System.Text.Json.Serialization;

namespace Remov.Backend.Models;

[JsonSerializable(typeof(SpotifyAccessTokenInfo))]
internal partial class SpotifyAccessTokenContext : JsonSerializerContext;

public class SpotifyAccessTokenInfo
{
    [JsonPropertyName("accessToken")]
    public string? AccessToken { get; set; }

    [JsonPropertyName("accessTokenExpirationTimestampMs")]
    public long ExpirationTimestampMs { get; set; }

    [JsonPropertyName("isAnonymous")]
    public bool IsAnonymous { get; set; }

    [JsonPropertyName("clientId")]
    public string? ClientId { get; set; }
}
