# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# copy csproj and restore as distinct layers
WORKDIR /src
COPY EasyStay.sln ./

COPY Booking/*.csproj ./Booking/
COPY Model/*.csproj ./Model/

COPY EasyStay.Domain/*.csproj ./EasyStay.Domain/
COPY EasyStay.Application/*.csproj ./EasyStay.Application/
COPY EasyStay.Persistence/*.csproj ./EasyStay.Persistence/
COPY EasyStay.Infrastructure/*.csproj ./EasyStay.Infrastructure/
COPY EasyStay.WebApi/*.csproj ./EasyStay.WebApi/
RUN dotnet restore

# copy everything else and build app
COPY . .

WORKDIR /src/EasyStay.WebApi
RUN dotnet publish "EasyStay.WebApi.csproj" -c Release -o /app

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .

# information
EXPOSE 8080

# environments
ENV ASPNETCORE_ENVIRONMENT=Docker

# run
ENTRYPOINT ["dotnet", "EasyStay.WebApi.dll"]