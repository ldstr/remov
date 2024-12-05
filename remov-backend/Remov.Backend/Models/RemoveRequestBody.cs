using System.Text.Json.Serialization;

namespace Remov.Backend.Models;

[JsonSerializable(typeof(RemoveRequestBody))]
internal partial class RemoveRequestBodyContext : JsonSerializerContext;

public class RemoveRequestBody
{
    [JsonPropertyName("email")]
    public string? Email { get; set; }

    [JsonPropertyName("track_uri")]
    public string? TrackUri { get; set; }

    [JsonPropertyName("playlist_uri")]
    public string? PlaylistUri { get; set; }

    [JsonPropertyName("captcha_response")]
    public string? CaptchaResponse { get; set; }
}
